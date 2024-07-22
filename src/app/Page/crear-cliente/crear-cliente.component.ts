import { Component } from '@angular/core';
import { Cliente } from '../../Domain/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';
import Swal from 'sweetalert2';


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
        this.cliente= params['Cliente']
      }
    }

  guardar(){
    console.log('Cliente guardado:', this.cliente);
    this.clienteService.save(this.cliente).subscribe(data => {
      console.log("resultado WS save", data);
      //this.router.navigate(['pagina1/Listar'])
    });
    this.cliente = new Cliente()
    //alert("Cliente creado exitosamente")
    this.showClientCreatedAlert();
    
  }

  showClientCreatedAlert() {
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Cliente creado exitosamente.',
      confirmButtonText: 'Aceptar'
    });
  }
  
}
