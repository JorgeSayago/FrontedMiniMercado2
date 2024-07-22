import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Page/login/login.component';
import { ProductoComponent } from './Page/producto/producto.component';
import { MenuComponent } from './menu/menu.component';
import { CrearClienteComponent } from './Page/crear-cliente/crear-cliente.component';
import { TicketComponent } from './Page/ticket/ticket.component';
import { PageofertaspriComponent } from './Page/pageofertaspri/pageofertaspri.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarClienteComponent } from './Page/listar-cliente/listar-cliente.component';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ActualizarClienteComponent } from './Page/actualizar-cliente/actualizar-cliente.component';
import { ListarProductoComponent } from './Page/listar-producto/listar-producto.component';
import { CrearUsuarioComponent } from './Page/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './Page/listar-usuario/listar-usuario.component';
import { CrearProveedorComponent } from './Page/crear-proveedor/crear-proveedor.component';
import { ListarProveedorComponent } from './Page/listar-proveedor/listar-proveedor.component';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { CrearPromotionComponent } from './Page/crear-promotion/crear-promotion.component';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PiePaginaComponent,
    LoginComponent,
    ProductoComponent,
    MenuComponent,
    CrearClienteComponent,
    TicketComponent,
    PageofertaspriComponent,
    ListarClienteComponent,
    ActualizarClienteComponent,
    ListarProductoComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    CrearProveedorComponent,
    ListarProveedorComponent,
    CrearPromotionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelect,
    MatOption,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
