import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  itensMenu = [
    {label: 'Inicio', link: ''},
    {label: 'Clientes', link: '/clientes'},
    {label: 'Contas', link: '/contas'},
    {label: 'Sobre', link: '/sobre'}
  ]
}
