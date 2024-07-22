import { Component } from '@angular/core';
import { Usuario } from '../../Domain/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrl: './actualizar-usuario.component.css'
})
export class ActualizarUsuarioComponent {

  usuario: Usuario = new Usuario();
  roles: string[] = ['Admin', 'User']; // Lista de roles disponibles

  constructor(private usuarioService:UsuarioService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.usuario = new Usuario()
        this.usuario= params['Usuario']
      }
    }

    modificar(){ //fire actualizado
      console.log(this.usuario)
      //codigo para guardar en la base de datos
      this.usuarioService.update(this.usuario).subscribe(data => {
        console.log("Resultado WS SAVE", data);
      });
      this.router.navigate(['pagina/listarUsuario'])
      }

  showUpdateConfirmation() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de Actualizar el Usuario',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Actualizar el Usurio',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.modificar();
        //this.loginService.logout();
      }
    });
  }

}
