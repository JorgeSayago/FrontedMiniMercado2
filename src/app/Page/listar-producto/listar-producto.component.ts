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

 eliminar(producto: Producto){
  this.productoService.delete(producto).subscribe(data => {
    console.log("resultado WS save", data);
    });
this.reloadPage();

  }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(producto: Producto){
  console.log(producto)
  let params: NavigationExtras = {
    queryParams: {
      Producto: producto,
    }
  }
  this.router.navigate(['pagina/ActualizarProducto'], params)
}
}
