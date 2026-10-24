import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  imports: [FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrl: './cliente-form.component.css'
})
export class ClienteFormComponent {

  //'as Cliente' silencia erros do TS, pois o objeto não está inicializado, é como dizer: "Eu sei que não está, mas confia em mim que vai ficar"
  cliente: Cliente = {} as Cliente;
  confirmarSenha: String | undefined;


  private service = inject(ClienteService);
  private router = inject(Router);
  
  salvar() {
    if(this.cliente.senha === '') {
      alert('A senha não pode ser vazia.');
      return;
    }
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    this.service.incluir(this.cliente).subscribe({
      next: (clienteCriado) => {
        this.cliente = clienteCriado;
        alert(`Cliente ${clienteCriado.nome} cadastrado com sucesso!`);
        this.router.navigate(['/admin-clientes-listar']);
      }
    });
  }
}
