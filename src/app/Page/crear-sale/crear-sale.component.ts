import { Component } from '@angular/core';
import { Producto } from '../../Domain/producto';
import { ProductoService } from '../../services/producto.service';
import { Cliente } from '../../Domain/cliente';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { Router, NavigationExtras } from '@angular/router';
import { Sale } from '../../Domain/sale';
import { SaleService } from '../../services/sale.service';
import { SaleDetail } from '../../Domain/saledetail';
import { SaledetailService } from '../../services/saledetail.service';


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
  //Para buscar cabecera por NumeroVenta
  saleb: Sale = new Sale();
  salebTn: Sale | null = null;

  //Para crear la cabecera factura
  sale: Sale = new Sale();

  //Para crear el detalle de la venta
  saledetail = new SaleDetail();

  //Para actulizar stock despues de una venta
  productovemta : Producto = new Producto();

  //Para listar los detalles
  listadoDetallesWS:any;

  //Objeto para asentar los detalles
  SaleDetailTabla : SaleDetail = new SaleDetail();

  constructor(private productoService : ProductoService, private saledetailService : SaledetailService,
    private clienteService : ClienteService,private saleService:SaleService ,private datePipe: DatePipe,private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.SaleDetailTabla = new SaleDetail();
      this.SaleDetailTabla = params['SaleDetail']
    }
    }

    listarTablaDetalles(){
      const id_venta : number= this.salebTn?.sale_id ?? 0 ;
      this.listadoDetallesWS = this.saledetailService.getAll(id_venta);
    }

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
        console.log('Sale creada:', response);
        //this.order = new Order()
        //this.productoTn = null;
        //this.proveedorTn = null;
        //alert("Promoción creada exitosamente")
        this.showSaleCreatedAlert();
        //this.modificar();
      },
      error: (error) => {
        console.error('Sale creada:', error);
        //this.order = new Order()
        //this.productoTn = null;
        //this.proveedorTn = null;
        this.showSaleCreatedAlert();
        this.buscarSale();
        //this.modificar();
      }
    });
  }

  guardarSaleDetail(){
    const cantidad: number = this.saledetail.cantidad ?? 0;
    const precioUnitario: number = parseFloat(this.productoTn?.precioUnitario ?? '0');

    const formattedDetail = {
      ...this.saledetail,
      sale_id: this.salebTn?.sale_id,
      product_id: this.producto.product_id,
      precio : cantidad * precioUnitario,
    };

    this.saledetailService.save(formattedDetail).subscribe({
      next: (response) => {
        console.log('Sale Detail creado:', response);
        //this.order = new Order()
        //this.productoTn = null;
        //this.proveedorTn = null;
        //alert("Promoción creada exitosamente")
        //this.showSaleCreatedAlert();
        //this.modificar();
      },
      error: (error) => {
        console.error('Sale creada:', error);
        this.actualizarStockVenta();
        this.listarTablaDetalles();
        this.showSaleDetailCreatedAlert();
        this.saledetail = new SaleDetail();
        this.producto = new Producto();
        this.productoTn = null;
      }
    });
  }

  actualizarStockVenta(){
    console.log(this.productovemta)
    this.productoService.updateStockProductoVenta(this.productovemta.product_id,this.productovemta).subscribe(data => {
      console.log("Resultado WS SAVE", data);
    });
    this.productovemta = new Producto();
  }

  showSaleCreatedAlert() {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Cabecera acentada exitosamente.',
      confirmButtonText: 'Aceptar'
    });
  }

  showSaleDetailCreatedAlert() {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Detalle agregado exitosamente.',
      confirmButtonText: 'Aceptar'
    });
  }

  buscarProducto() {
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

  showProductoEncontrado(){
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Producto encontrado',
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


  buscarSale() {
    if (this.saleb.numero_venta) {

      this.saleService.getSaleByNumeroVenta(this.saleb.numero_venta).subscribe(data => {
        console.log("resultado WS save", data);
        this.salebTn = data;
        //this.showProductoEncontrado();
      },error => {
        console.error('Error fetching product:', error);
        this.productoTn = null;  // Limpia los campos si no se encuentra el producto
        //this.showProductoNoEncontrado();
      });
    }
  }

  eliminar(saledetaile: SaleDetail){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de Eliminar este detalle.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar el detalle',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.saledetailService.delete(saledetaile).subscribe(data => {
          console.log("resultado WS save", data);
          },error => {
        console.error('Error fetching product:', error);
        this.productoTn = null;  // Limpia los campos si no se encuentra el producto
        this.listarTablaDetalles();
      });
      }
    });
    }


  
}
