import { Component } from '@angular/core';
import { Promotion } from '../../Domain/promotion';
import { Router } from '@angular/router';
import { PromotionService } from '../../services/promotion.service';


@Component({
  selector: 'app-listar-promotion',
  templateUrl: './listar-promotion.component.html',
  styleUrl: './listar-promotion.component.css'
})
export class ListarPromotionComponent {
  Promotion: Promotion = new Promotion();
  listadoPromotionsWS:any;

  constructor(private promotionService: PromotionService,
    private router: Router) {
  let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      this.Promotion = new Promotion();
      this.Promotion = params['Promotion']
    }
}

ngOnInit(): void {
  this.listadoPromotionsWS = this.promotionService.getAll();
 }

}
