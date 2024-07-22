import { Component } from '@angular/core';
import { Producto } from '../../Domain/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  producto: Producto = new Producto();

  constructor(private productoService:ProductoService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.producto = new Producto()
        this.producto= params['Producto']
      }
    }

  guardar(){
    console.log('Producto guardado:', this.producto);
    this.productoService.save(this.producto).subscribe(data => {
      console.log("resultado WS save", data);
      //this.router.navigate(['pagina1/Listar'])
    });
    this.producto = new Producto()
    //alert("Producto creado exitosamente")
    this.showProductCreatedAlert();
  }

  showProductCreatedAlert() {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Producto creado exitosamente.',
      confirmButtonText: 'Aceptar'
    });
  }
  
}
