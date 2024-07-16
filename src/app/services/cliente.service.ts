import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../Domain/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  save(cliente: Cliente) {
    return this.http.post<any>("http://localhost:8001/client/create_client", cliente)
  }
}
