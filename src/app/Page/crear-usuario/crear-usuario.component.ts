import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../Domain/usuario';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrl: './crear-usuario.component.css'
})
export class CrearUsuarioComponent {

  usuario: Usuario = new Usuario();
  roles: string[] = ['Admin', 'User']; // Lista de roles disponibles

  constructor(private  usuarioService:UsuarioService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.usuario = new Usuario()
        this.usuario= params['Usuario']
      }
    }

    guardar(){
      console.log('Usuario guardado:', this.usuario);
      this.usuarioService.save(this.usuario).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.usuario = new Usuario()
      alert("Usuario creado exitosamente")
    }

}
