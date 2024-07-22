import { Component } from '@angular/core';
import { Producto } from '../../Domain/producto';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrl: './actualizar-producto.component.css'
})
export class ActualizarProductoComponent {

  producto: Producto = new Producto();

  constructor(private productoService: ProductoService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.producto = new Producto()
        this.producto = params['Producto']
      }

  }
  modificar(){ //fire actualizado
    console.log(this.producto)
    this.productoService.update(this.producto).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    //this.contacto=new Contacto()
    this.router.navigate(['paginas/Lista'])
    
    }

}
