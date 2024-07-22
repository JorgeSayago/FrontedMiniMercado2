import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario } from '../../Domain/usuario';
import { UsuarioService } from '../../services/usuario.service';


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

 eliminar(usuario: Usuario){
  this.usuarioService.delete(usuario).subscribe(data => {
    console.log("resultado WS save", data);
    });
this.reloadPage();

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

}
