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
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuard } from './auth.guard';
import { CrearPromotionComponent } from './Page/crear-promotion/crear-promotion.component';
import { ListarPromotionComponent } from './Page/listar-promotion/listar-promotion.component';
import { ActualizarProductoComponent } from './Page/actualizar-producto/actualizar-producto.component';

const routes: Routes = [
  { path:"pagina/CrearProducto",component:ProductoComponent, canActivate: [AuthGuard]},
  { path:"pagina/CrearCliente",component:CrearClienteComponent, canActivate: [AuthGuard]},
  { path:"pagina/crearTicket",component:TicketComponent, canActivate: [AuthGuard]},
  { path:"login",component:LoginComponent},
  { path:"",component:PageofertaspriComponent, canActivate: [AuthGuard]},
  { path:"pagina/listarCliente",component:ListarClienteComponent, canActivate: [AuthGuard]},
  { path:"pagina/ActualizarCliente",component:ActualizarClienteComponent, canActivate: [AuthGuard]},
  { path:"pagina/ActualizarProducto",component:ActualizarProductoComponent, canActivate: [AuthGuard]},
  { path:"pagina/listarProducto",component:ListarProductoComponent, canActivate: [AuthGuard]},
  { path:"pagina/crearUsuario",component:CrearUsuarioComponent, canActivate: [AuthGuard]},
  { path:"pagina/listarUsuario",component:ListarUsuarioComponent, canActivate: [AuthGuard]},
  { path:"pagina/crearProveedor",component:CrearProveedorComponent, canActivate: [AuthGuard]},
  { path:"pagina/listarProveedor",component:ListarProveedorComponent, canActivate: [AuthGuard]},
  { path:"pagina/pricipal",component:CabeceraComponent, canActivate: [AuthGuard]},
  { path:"pagina/crearPromocion",component:CrearPromotionComponent, canActivate: [AuthGuard]},
  { path:"pagina/listarPromocion",component:ListarPromotionComponent, canActivate: [AuthGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
