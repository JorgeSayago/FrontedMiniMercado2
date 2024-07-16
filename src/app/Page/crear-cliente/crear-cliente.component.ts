import { Component } from '@angular/core';
import { Cliente } from '../../Domain/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent {

  cliente: Cliente = new Cliente();

  constructor(private clienteService:ClienteService,
    private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.cliente = new Cliente()
        this.cliente= params['cliente']
      }
    }

  guardar(){
    console.log('Cliente guardado:', this.cliente);
    this.clienteService.save(this.cliente).subscribe(data => {
      console.log("resultado WS save", data);
      //this.router.navigate(['pagina1/Listar'])
    });
    this.cliente = new Cliente()
    alert("Cliente creado exitosamente")
    
  }
}
