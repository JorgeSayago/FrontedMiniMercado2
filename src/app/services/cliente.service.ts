import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseUrl = 'http://localhost:8001/client';

  constructor(private http: HttpClient) { }

  save(cliente: Cliente) {
    return this.http.post<any>("http://localhost:8001/client/create_client", cliente)
  }


  getAll(){
    return this.http.get<any>("http://localhost:8001/client/list_clients");
   }

   delete(cliente: Cliente) {
    const url = `http://localhost:8001/client/deleteCli`;
    return this.http.delete(url ,{ body: cliente });
  }

  update(cliente: Cliente) {
    const url = `http://localhost:8001/client/updateCli`;
    return this.http.put(url, cliente);
  }

  getClienteById(id: number) {
    const url = `http://localhost:8001/client/search_client_by_ID/${id}`;
    return this.http.get<Cliente>(url);
  }
  
}
