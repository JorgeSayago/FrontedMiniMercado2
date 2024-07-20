import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FrontedMiniMercado2';

  constructor(private loginService:LoginService){}

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

}
