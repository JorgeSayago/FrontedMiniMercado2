import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Proveedor } from '../../Domain/proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrl: './listar-proveedor.component.css'
})
export class ListarProveedorComponent {

  Proveedor: Proveedor = new Proveedor();
  listadoProveedoresWS:any;

  constructor(private proveedorService: ProveedorService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Proveedor = new Proveedor();
      this.Proveedor = params['Proveedor']
    }
}

ngOnInit(): void {
  this.listadoProveedoresWS= this.proveedorService.getAll();
 }

eliminar(proveedor: Proveedor){
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de Eliminar el Proveedor.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, Eliminar el Proveedor',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.proveedorService.delete(proveedor).subscribe(data => {
        console.log("resultado WS save", data);
        });
    this.reloadPage();
    }
  });
  }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(proveedor: Proveedor){
  console.log(proveedor)
  let params: NavigationExtras = {
    queryParams: {
      Proveedor: proveedor,
    }
  }
  this.router.navigate(['pagina/ActualizarProveedor'], params)
}

}
