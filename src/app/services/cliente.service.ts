import { inject, Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  private httpClient = inject(HttpClient);
  private readonly API = "http://localhost:3000/clientes";

  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.API);
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.API, cliente);
  }

  excluir(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.API}/${id}`);
  }

  buscarPorId(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.API}/${id}`);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
  }
}
