import { Component } from '@angular/core';
import { Cliente } from '../../Domain/cliente';
import { Router, NavigationExtras } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {

  cliente: Cliente = new Cliente();
  listadoClienteWS:any;

  constructor(private clienteService: ClienteService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.cliente = new Cliente();
      this.cliente = params['cliente']
    }
}

ngOnInit(): void {
  this.listadoClienteWS = this.clienteService.getAll();
 }

 eliminar(cliente: Cliente){
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de Eliminar el Cliente.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, Eliminar el Cliente',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.clienteService.delete(cliente).subscribe(data => {
        console.log("resultado WS save", data);
        });
    this.reloadPage();
    }
  });
  }

/**
 * eliminar(cliente: Cliente){
  this.clienteService.delete(cliente).subscribe(data => {
    console.log("resultado WS save", data);
    });
this.reloadPage();

  }
 */

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(cliente: Cliente){
  console.log(cliente)
  let params: NavigationExtras = {
    queryParams: {
      Cliente: cliente,
    }
  }
  this.router.navigate(['pagina/ActualizarCliente'], params)
}
}


