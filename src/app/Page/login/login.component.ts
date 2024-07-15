import { Component } from '@angular/core';
import { Login } from '../../Domain/login';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corregido a `styleUrls`
})
export class LoginComponent {
  loginData: Login = new Login(); // Inicialización correcta


  constructor(private loginService:LoginService,  private router: Router){
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.loginData = new Login()
        this.loginData = params['login']
      }
  }

  login(){
    console.log('Correo:', this.loginData.nombre);
    console.log('Contraseña:', this.loginData.contrasenia);
    
  }
}
