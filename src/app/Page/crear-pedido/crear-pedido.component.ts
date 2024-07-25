import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../Domain/producto';
import { Proveedor } from '../../Domain/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-crear-pedido',
  templateUrl: './crear-pedido.component.html',
  styleUrl: './crear-pedido.component.css'
})
export class CrearPedidoComponent {
  //Para buscar el producto
  producto : Producto = new Producto();
  productoTn: Producto | null = null;
  //Para buscar el proveedor
  proveedor : Proveedor = new Proveedor();
  proveedorTn: Proveedor | null = null;

  constructor(private productoService: ProductoService, private provedorService : ProveedorService) { }
  fetchProduct() {
    if (this.producto.product_id) {

      this.productoService.getProductoById(this.producto.product_id).subscribe(data => {
        console.log("resultado WS save", data);
        this.productoTn = data;
      },error => {
        console.error('Error fetching product:', error);
        this.productoTn = null;  // Limpia los campos si no se encuentra el producto
      });
    }
  }

  fetchProvedor() {
    if (this.proveedor.supplier_id) {
      this.provedorService.getProveedorById(this.proveedor.supplier_id).subscribe(data => {
        console.log("resultado WS save", data);
        this.proveedorTn = data;
      },
      error => {
        console.error('Error fetching product:', error);
        this.proveedorTn = null;  // Limpia los campos si no se encuentra el producto
      });
    }
  }

   
}
