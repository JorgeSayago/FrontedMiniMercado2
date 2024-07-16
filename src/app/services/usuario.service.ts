import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../Domain/usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  save(usuario: Usuario) {
    return this.http.post<any>("http://localhost:8001/user/create_user", usuario)
  }


  getAll(){
    return this.http.get<any>("http://localhost:8001/user/list_users");
   }

}
