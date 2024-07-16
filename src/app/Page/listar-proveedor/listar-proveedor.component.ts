import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Proveedor } from '../../Domain/proveedor';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrl: './listar-proveedor.component.css'
})
export class ListarProveedorComponent {

  Proveedor: Proveedor = new Proveedor();
  listadoProveedoresWS:any;

  constructor(private proveedorService: ProveedorService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Proveedor = new Proveedor();
      this.Proveedor = params['Proveedor']
    }
}

ngOnInit(): void {
  this.listadoProveedoresWS= this.proveedorService.getAll();
 }


}
