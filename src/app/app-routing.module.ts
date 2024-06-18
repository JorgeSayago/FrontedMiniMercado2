import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './Page/producto/producto.component';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { TicketComponent } from './Page/ticket/ticket.component';

const routes: Routes = [
  { path:"pagina/CrearProducto",component:ProductoComponent},
  { path:"pagina/CrearCliente",component:CrearClienteComponent},
  { path:"pagina/crearTicket",component:TicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
