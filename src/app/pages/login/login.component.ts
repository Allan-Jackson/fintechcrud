import { Component } from '@angular/core';
import { Inject } from '@angular/core'; //opção moderna para a injeção de dependência no campo
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}; //injeção de dependência pelo construtor

  //injeção de dependência direto no campo da classe
  //router = inject(Router);

  login: string = "";
  senha: string = "";
  botaoDesabilitado: boolean = true;


  //Valido se os campos foram preenchidos para habilitar o botão de login
  validarFormulario() {
    if (this.login.trim() !== '' && this.senha.trim() !== '') {
      this.botaoDesabilitado = false;
    } else {
      this.botaoDesabilitado = true;
    }
  }

  //Verifico se o usuário e senha são válidos
  fazerLogin() {
    if (this.login === 'admin' && this.senha === '123') {
      alert(`Bem-vindo ${this.login}!`);
      this.router.navigate(['/']);
    } else {
      alert('Dados inválidos');
    }
  }


}
