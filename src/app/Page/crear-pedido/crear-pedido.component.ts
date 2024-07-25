import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../Domain/producto';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrl: './crear-pedido.component.css'
})
export class CrearPedidoComponent {
  producto : Producto = new Producto();
  //productoT: Producto = new Producto();
  productoTn: Producto | null = null;

  constructor(private productoService: ProductoService) { }
  fetchProduct() {
    if (this.producto.product_id) {

      this.productoService.getProductoById(this.producto.product_id).subscribe(data => {
        console.log("resultado WS save", data);
        this.productoTn = data;
      });
    }
  }

   
}
