import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../Domain/producto';
import { Proveedor } from '../../Domain/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PedidoService } from '../../services/pedido.service';
import { Order } from '../../Domain/order';

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

  //Para crear la orden de pedido
  order : Order = new Order();

  //objeto para actualizar producto
  productoact : Producto = new Producto();

  constructor(private productoService: ProductoService, private provedorService : ProveedorService,
    private router: Router,private datePipe: DatePipe, private pedidoService:PedidoService) { 
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.order = new Order()
        this.order= params['Order']
      }
    }


  fetchProduct() {
    if (this.producto.product_id) {

      this.productoService.getProductoById(this.producto.product_id).subscribe(data => {
        console.log("resultado WS save", data);
        this.productoTn = data;
        this.showProductoEncontrado();
      },error => {
        console.error('Error fetching product:', error);
        this.productoTn = null;  // Limpia los campos si no se encuentra el producto
        this.showProductoNoEncontrado();
      });
    }
  }

  fetchProvedor() {
    if (this.proveedor.supplier_id) {
      this.provedorService.getProveedorById(this.proveedor.supplier_id).subscribe(data => {
        console.log("resultado WS save", data);
        this.proveedorTn = data;
        this.showProveedorEncontrado();
      },
      error => {
        console.error('Error fetching product:', error);
        this.proveedorTn = null;  // Limpia los campos si no se encuentra el producto
        this.showProveedorNoEncontrado();
      });
    }
  }

  guardar() {
    const formattedPedido = {
      ...this.order,
      fechaPedido: this.datePipe.transform(this.order.fechaPedido, 'yyyy-MM-dd HH:mm:ss'),
      fechaEntrega: this.datePipe.transform(this.order.fechaEntrega, 'yyyy-MM-dd HH:mm:ss')
    };

    this.pedidoService.save(formattedPedido).subscribe({
      next: (response) => {
        console.log('Promoción creada:', response);
        this.order = new Order()
        this.productoTn = null;
        this.proveedorTn = null;
        //alert("Promoción creada exitosamente")
        this.showPedidoCreatedAlert();
        //this.modificar();
      },
      error: (error) => {
        console.error('Promoción creada:', error);
        this.order = new Order()
        this.productoTn = null;
        this.proveedorTn = null;
        this.showPedidoCreatedAlert();
        this.modificar();
      }
    });
  }

  modificar(){ //fire actualizado
    console.log(this.productoact)
    this.productoService.updateStockProducto(this.productoact.product_id,this.productoact).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    this.productoact = new Producto();
    }

  showPedidoCreatedAlert() {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Pedido ingresado exitosamente.',
      confirmButtonText: 'Aceptar'
    });
  }

  showProductoEncontrado(){
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Producto encontrado',
      confirmButtonText: 'Aceptar'
    });
  }

  showProveedorEncontrado(){
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Proveedor encontrado',
      confirmButtonText: 'Aceptar'
    });
  }

  showProductoNoEncontrado(){
    Swal.fire({
      icon: 'error',
      title: '¡Qué mal!',
      text: 'Producto no encontrado',
      confirmButtonText: 'Aceptar'
    });
  }

  showProveedorNoEncontrado(){
    Swal.fire({
      icon: 'error',
      title: '¡Qué mal!',
      text: 'Proveedor no encontrado',
      confirmButtonText: 'Aceptar'
    });
  }
   
}
