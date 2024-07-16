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
    const url = `http://localhost:8001/client/delete_client_by_ID/?cient_id=${cliente}`;
    return this.http.delete(url);
}

  update(cliente: Cliente) {
    const url = 'http://localhost:8080/carrobe/rs/carros';
    return this.http.put(url, cliente);
  }
}
