import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './Page/producto/producto.component';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { TicketComponent } from './Page/ticket/ticket.component';
import { LoginComponent } from './Page/login/login.component';
import { PageofertaspriComponent } from './Page/pageofertaspri/pageofertaspri.component';
import { ListarClienteComponent } from './Page/listar-cliente/listar-cliente.component';
import { ActualizarClienteComponent } from './Page/actualizar-cliente/actualizar-cliente.component';
import { ListarProductoComponent } from './Page/listar-producto/listar-producto.component';
import { CrearUsuarioComponent } from './Page/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './Page/listar-usuario/listar-usuario.component';
import { CrearProveedorComponent } from './Page/crear-proveedor/crear-proveedor.component';
import { ListarProveedorComponent } from './Page/listar-proveedor/listar-proveedor.component';

const routes: Routes = [
  { path:"pagina/CrearProducto",component:ProductoComponent},
  { path:"pagina/CrearCliente",component:CrearClienteComponent},
  { path:"pagina/crearTicket",component:TicketComponent},
  { path:"pagina/loginUsuario",component:LoginComponent},
  { path:"",component:PageofertaspriComponent},
  { path:"pagina/listarCliente",component:ListarClienteComponent},
  { path:"pagina/ActualizarCliente",component:ActualizarClienteComponent},
  { path:"pagina/listarProducto",component:ListarProductoComponent},
  { path:"pagina/crearUsuario",component:CrearUsuarioComponent},
  { path:"pagina/listarUsuario",component:ListarUsuarioComponent},
  { path:"pagina/crearProveedor",component:CrearProveedorComponent},
  { path:"pagina/listarProveedor",component:ListarProveedorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
