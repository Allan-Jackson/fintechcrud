import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

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
    } else {
      alert('Dados inválidos');
    }
  }


}
