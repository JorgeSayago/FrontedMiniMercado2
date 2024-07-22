import { Component } from '@angular/core';
import { Cliente } from '../../Domain/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrl: './actualizar-cliente.component.css'
})
export class ActualizarClienteComponent {

  cliente: Cliente = new Cliente();

  constructor(private clienteService:ClienteService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.cliente = new Cliente()
        this.cliente= params['Cliente']
      }
    }

    modificar(){ //fire actualizado
      console.log(this.cliente)
      //codigo para guardar en la base de datos
      this.clienteService.update(this.cliente).subscribe(data => {
        console.log("Resultado WS SAVE", data);
      });
      this.router.navigate(['pagina/listarCliente'])
      
      }


}
