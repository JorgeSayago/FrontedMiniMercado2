import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Login}from '../Domain/login'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl= 'http://localhost:8001/user'

  constructor(private http: HttpClient, private router:Router) { }


  login(login: Login): Observable<any> {
    return this.http.post<any>("http://localhost:8001/user/authenticate", login).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);  // Redirige al usuario al login
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
