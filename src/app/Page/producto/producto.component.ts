import { Component } from '@angular/core';
import { Producto } from '../../Domain/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  producto: Producto = new Producto();

  guardar(){
  }
}
