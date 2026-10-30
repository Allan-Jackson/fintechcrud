import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent implements OnInit {
  //Injeta o ClienteService para salvar o cliente no banco
  private service = inject(ClienteService);

  //Injeta o Router para voltar à lista de clientes
  private router = inject(Router);

  // Injeta o ActivatedRoute para acessar os parâmetros da rota
  private currentRoute = inject(ActivatedRoute);

  //'as Cliente' silencia erros do TS, pois o objeto não está inicializado, é como dizer: "Eu sei que não está, mas confia em mim que vai ficar"
  cliente: Cliente = {} as Cliente;
  confirmarSenha: String | undefined;

  //pega a rota atual no navegador e pega o valor do parâmetro 'id' da url
  clienteId: string | null = this.currentRoute.snapshot.paramMap.get('id');


  ngOnInit(): void {
    if (this.clienteId) {
      this.service.buscarPorId(this.clienteId).subscribe({
        next: (cliente) => this.cliente = cliente,
        error: () => alert('Cliente não encontrado.')
      });
    }
  }

  salvar() {
    if (!this.cliente.senha) {
      alert('A senha não pode ser vazia.');
      return;
    }
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    if (this.clienteId) { //Edita um cliente
      this.service.editar(this.cliente).subscribe({
        next: (clienteEditado) => {
          this.cliente = clienteEditado;
          alert(`Cliente ${clienteEditado.nome} alterado com sucesso!`);
          this.router.navigate(['/admin-clientes-listar']);
        },
        error: () => {
          alert('Erro ao alterar o cliente');
        }
      });
    } else { //Adiciona novo cliente
      this.service.incluir(this.cliente).subscribe({
        next: (clienteCriado) => {
          this.cliente = clienteCriado;
          alert(`Cliente ${clienteCriado.nome} cadastrado com sucesso!`);
          this.router.navigate(['/admin-clientes-listar']);
        }
      });
    }

  }
}
