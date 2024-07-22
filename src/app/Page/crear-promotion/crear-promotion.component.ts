import { Component } from '@angular/core';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../Domain/promotion';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-crear-promotion',
  templateUrl: './crear-promotion.component.html',
  styleUrl: './crear-promotion.component.css'
})
export class CrearPromotionComponent {

  promotion: Promotion = new Promotion();

  constructor(private promotionService:PromotionService,
    private router: Router,private datePipe: DatePipe){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.promotion = new Promotion()
        this.promotion= params['Promotion']
      }
    }
    /**
     * guardar(){
      console.log('Promocion guardada:', this.promotion);
      this.promotionService.save(this.promotion).subscribe(data => {
        console.log("resultado WS save", data);
        //this.router.navigate(['pagina1/Listar'])
      });
      this.promotion = new Promotion()
      alert("Promocion creada exitosamente")
    }
    */

    guardar() {
      const formattedPromotion = {
        ...this.promotion,
        fechaInicio: this.datePipe.transform(this.promotion.fechaInicio, 'yyyy-MM-dd HH:mm:ss'),
        fechaFin: this.datePipe.transform(this.promotion.fechaFin, 'yyyy-MM-dd HH:mm:ss')
      };
  
      this.promotionService.save(formattedPromotion).subscribe({
        next: (response) => {
          console.log('Promoción creada:', response);
          this.promotion = new Promotion()
        },
        error: (error) => {
          console.error('Error al crear la promoción:', error);
          this.promotion = new Promotion()
        }
      });
    }


    

}
