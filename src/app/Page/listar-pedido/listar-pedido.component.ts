import { Component } from '@angular/core';
import { Order } from '../../Domain/order';
import { PedidoService } from '../../services/pedido.service';
import { Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrl: './listar-pedido.component.css'
})
export class ListarPedidoComponent {

  Order: Order = new Order();
  listadoPedidosWS:any;

  constructor(private pedidoService: PedidoService , private router: Router){
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Order = new Order();
      this.Order = params['Order']
    }
  }

  ngOnInit(): void {
    this.listadoPedidosWS = this.pedidoService.getAll();
   }

    eliminar(order: Order){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Estás a punto de Eliminar el Pedido.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, Eliminar el Pedido',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pedidoService.delete(order).subscribe(data => {
          console.log("resultado WS save", data);
          });
      this.reloadPage();
      }
    });
    }

   

   reloadPage(){
    let currentUrl = this.router.url
    this.router.navigateByUrl("/", {skipLocationChange: true}).then(
      () =>{
        this.router.navigate([currentUrl])
      }
    )
   }

}
