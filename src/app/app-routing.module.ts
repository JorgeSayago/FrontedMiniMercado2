import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './Page/producto/producto.component';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { TicketComponent } from './Page/ticket/ticket.component';
import { LoginComponent } from './Page/login/login.component';
import { PageofertaspriComponent } from './Page/pageofertaspri/pageofertaspri.component';
import { ListarClienteComponent } from './Page/listar-cliente/listar-cliente.component';
import { ActualizarClienteComponent } from './Page/actualizar-cliente/actualizar-cliente.component';

const routes: Routes = [
  { path:"pagina/CrearProducto",component:ProductoComponent},
  { path:"pagina/CrearCliente",component:CrearClienteComponent},
  { path:"pagina/crearTicket",component:TicketComponent},
  { path:"pagina/loginUsuario",component:LoginComponent},
  { path:"",component:PageofertaspriComponent},
  { path:"pagina/listarCliente",component:ListarClienteComponent},
  { path:"pagina/ActualizarCliente",component:ActualizarClienteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
