import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  onBotaoClicado() {
    alert("Bem-vindo(a)");
  }

  teclaDigitada(event: KeyboardEvent): void {
    alert(`O usuário digitou: ${event.key}`);
  }

}
