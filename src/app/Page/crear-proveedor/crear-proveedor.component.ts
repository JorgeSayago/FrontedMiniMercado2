import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from '../../Domain/proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrl: './crear-proveedor.component.css'
})
export class CrearProveedorComponent {

  proveedor: Proveedor = new Proveedor();

  constructor(private  proveedorService:ProveedorService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.proveedor = new Proveedor()
        this.proveedor= params['Proveedor']
      }
    }

    guardar(){
      console.log('Provedor guardado:', this.proveedor);
      this.proveedorService.save(this.proveedor).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.proveedor = new Proveedor()
      //alert("Proveedor creado exitosamente")
      this.showSupplierCreatedAlert();
    }
    showSupplierCreatedAlert() {
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Proveedor creado exitosamente.',
        confirmButtonText: 'Aceptar'
      });
    }
    
}
