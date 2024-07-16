import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Producto } from '../../Domain/producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrl: './listar-producto.component.css'
})
export class ListarProductoComponent {

  Producto: Producto = new Producto();
  listadoProductosWS:any;

  constructor(private productoService: ProductoService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Producto = new Producto();
      this.Producto = params['Producto']
    }
}

ngOnInit(): void {
  this.listadoProductosWS = this.productoService.getAll();
 }

}
