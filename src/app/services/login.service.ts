import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Login}from '../Domain/login'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl= 'http://localhost:8081/user'

  constructor(private http: HttpClient) { }
    

  getLogin(login:Login){
    const url = `http://localhost:8081/user/search_user_by_name/?nombre=${login.nombre}/user_password/?contrasenia=${login.contrasenia}`;
    return this.http.get<any>(url)
  }


}
