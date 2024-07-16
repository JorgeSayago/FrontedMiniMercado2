import { Component } from '@angular/core';
import { Cliente } from '../../Domain/cliente';
import { Router, NavigationExtras } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrl: './listar-cliente.component.css'
})
export class ListarClienteComponent {

  Cliente: Cliente = new Cliente();
  listadoClienteWS:any;

  constructor(private clienteService: ClienteService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Cliente = new Cliente();
      this.Cliente = params['cliente']
    }
}

ngOnInit(): void {
  this.listadoClienteWS = this.clienteService.getAll();
 }

 eliminar(Cliente: Cliente){
  this.clienteService.delete(Cliente).subscribe(data => {
    console.log("resultado WS save", data);
    });
this.reloadPage();

  }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(Cliente: Cliente){
  console.log(Cliente)
  let params: NavigationExtras = {
    queryParams: {
      Cliente: Cliente,
    }
  }
  this.router.navigate(['pagina/ActualizarCliente'], params)
}
}


