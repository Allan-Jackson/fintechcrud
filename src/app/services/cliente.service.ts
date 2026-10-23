import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar(): Cliente[] {
    return [
      {
        id: "1",
        cpf: "12345678910",
        nome: "Enzo",
        sobrenome: "Silva",
        dataNascimento: "2005-01-10",
        email: ""
      },
      {
        id: "2",
        cpf: "10987654321",
        nome: "Valentina",
        sobrenome: "Campos",
        dataNascimento: "2007-08-14",
        email: ""
      },
    ];
  }
}
