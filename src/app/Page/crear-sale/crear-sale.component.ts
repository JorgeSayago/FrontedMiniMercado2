import { Component } from '@angular/core';
import { Producto } from '../../Domain/producto';
import { ProductoService } from '../../services/producto.service';
import { Cliente } from '../../Domain/cliente';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Sale } from '../../Domain/sale';
import { SaleService } from '../../services/sale.service';

@Component({
  selector: 'app-crear-sale',
  templateUrl: './crear-sale.component.html',
  styleUrl: './crear-sale.component.css'
})
export class CrearSaleComponent {

  // Para buscar el producto por ID
  producto: Producto = new Producto();
  productoTn: Producto | null = null;
  //Para buscar el cliente por cedula
  cliente: Cliente = new Cliente();
  clienteTn: Cliente | null = null;

  //Para crear la cabecera factura
  sale: Sale = new Sale();


  constructor(private productoService : ProductoService, private clienteService : ClienteService,private saleService:SaleService ,private datePipe: DatePipe){}

  buscarCliente() {
    if (this.cliente.cedula) {

      this.clienteService.getClienteByCedula(this.cliente.cedula).subscribe(data => {
        console.log("resultado WS save", data);
        this.clienteTn = data;
        this.showClienteEncontrado();
      },error => {
        console.error('Error fetching product:', error);
        this.clienteTn = null;  // Limpia los campos si no se encuentra el producto
        this.showClienteNoEncontrado();
      });
    }
  }

  showClienteEncontrado(){
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Cliente encontrado',
      confirmButtonText: 'Aceptar'
    });
  }

  showClienteNoEncontrado(){
    Swal.fire({
      icon: 'error',
      title: '¡Qué mal!',
      text: 'Cliente no encontrado',
      confirmButtonText: 'Aceptar'
    });
  }

  guardar() {
    const formattedSale = {
      ...this.sale,
      cliente_id: this.clienteTn?.cient_id,
      fecha_venta: this.datePipe.transform(this.sale.fecha_venta, 'yyyy-MM-dd HH:mm:ss'),
    };

    this.saleService.save(formattedSale).subscribe({
      next: (response) => {
        console.log('Promoción creada:', response);
        //this.order = new Order()
        //this.productoTn = null;
        //this.proveedorTn = null;
        //alert("Promoción creada exitosamente")
        //this.showPedidoCreatedAlert();
        //this.modificar();
      },
      error: (error) => {
        console.error('Promoción creada:', error);
        //this.order = new Order()
        //this.productoTn = null;
        //this.proveedorTn = null;
        //this.showPedidoCreatedAlert();
        //this.modificar();
      }
    });
  }
  
}
