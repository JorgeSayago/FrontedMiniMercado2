import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from '../../Domain/usuario';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent {

  Usuario: Usuario = new Usuario();
  listadoUsuariosWS:any;

  constructor(private usuarioService: UsuarioService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Usuario = new Usuario();
      this.Usuario = params['Usuario']
    }
}

ngOnInit(): void {
  this.listadoUsuariosWS = this.usuarioService.getAll();
 }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(usuario: Usuario){
  console.log(usuario)
  let params: NavigationExtras = {
    queryParams: {
      Usuario: usuario,
    }
  }
  this.router.navigate(['pagina/ActualizarUsuario'], params)
}

eliminar(usuario: Usuario){
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de Eliminar el Usuario.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, Eliminar el Usuario.',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.usuarioService.delete(usuario).subscribe(data => {
        console.log("resultado WS save", data);
        });
    this.reloadPage();
    }
  });
  }

}
