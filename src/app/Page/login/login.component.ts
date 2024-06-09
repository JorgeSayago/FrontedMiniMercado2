import { Component } from '@angular/core';
import { Login } from '../../Domain/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corregido a `styleUrls`
})
export class LoginComponent {
  loginData: Login = new Login(); // Inicialización correcta

  onSubmit(): void {
    console.log('Correo:', this.loginData.correo);
    console.log('Contraseña:', this.loginData.contrasenia);
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
  }
}
