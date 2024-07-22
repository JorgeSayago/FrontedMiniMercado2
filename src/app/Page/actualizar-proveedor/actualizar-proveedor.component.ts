import { Component } from '@angular/core';
import { Proveedor } from '../../Domain/proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrl: './actualizar-proveedor.component.css'
})
export class ActualizarProveedorComponent {

  proveedor: Proveedor = new Proveedor();

  constructor(private proveedorService:ProveedorService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.proveedor = new Proveedor()
        this.proveedor= params['Proveedor']
      }
    }

    modificar(){ //fire actualizado
      console.log(this.proveedor)
      //codigo para guardar en la base de datos
      this.proveedorService.update(this.proveedor).subscribe(data => {
        console.log("Resultado WS SAVE", data);
      });
      this.router.navigate(['pagina/listarProveedor'])
      }

  showUpdateConfirmation() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de Actualizar el Proveedor.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Actualizar el Proveedor',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.modificar();
        //this.loginService.logout();
      }
    });
  }

}
