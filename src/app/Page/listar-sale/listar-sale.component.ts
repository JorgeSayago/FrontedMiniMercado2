import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Sale } from '../../Domain/sale';
import { SaleService } from '../../services/sale.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listar-sale',
  templateUrl: './listar-sale.component.html',
  styleUrl: './listar-sale.component.css'
})
export class ListarSaleComponent {
  Sale: Sale = new Sale();
  listadoSalesWS:any;

  constructor(private saleService: SaleService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Sale = new Sale();
      this.Sale = params['Sale']
    }
}

ngOnInit(): void {
  this.listadoSalesWS = this.saleService.getAll();
 }
}
