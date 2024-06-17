import { Component } from '@angular/core';
import { Cliente } from '../../Domain/cliente';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent {

  cliente: Cliente = new Cliente();


  guardar(){
    
  }
}
