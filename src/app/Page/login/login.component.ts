import { Component } from '@angular/core';
import { Login } from '../../Domain/login';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service'
import Swal from 'sweetalert2';
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
        this.loginData = params['Login']
      }
  }

  login(){
    console.log('Correo:', this.loginData.nombre);
    console.log('Contraseña:', this.loginData.contrasenia);

    this.loginService.login(this.loginData).subscribe(
      () => {
        this.router.navigate(['/']);
        //alert("Bienvenido")
        this.showWelcomeAlert();
      },
      error => {
        console.error('Login failed', error);
        //alert("Usuario Desconocido")
        this.showUnknownUserAlert();
        this.loginData = new  Login()
      }
    );
  }

  showUnknownUserAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario Desconocido',
      confirmButtonText: 'Entendido'
    });
  }
  showWelcomeAlert() {
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      text: 'Nos alegra verte de nuevo.',
      confirmButtonText: 'Gracias'
    });
  }
  
}
