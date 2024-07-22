import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../Domain/promotion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-promotion',
  templateUrl: './actualizar-promotion.component.html',
  styleUrl: './actualizar-promotion.component.css'
})
export class ActualizarPromotionComponent {

  promotion: Promotion = new Promotion();

  constructor(private promotionService:PromotionService,
    private router: Router,private datePipe: DatePipe){
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        this.promotion = new Promotion()
        this.promotion= params['Promotion']
      }
    }

    modificarp() {
      const formattedPromotion = {
        ...this.promotion,
        fechaInicio: this.datePipe.transform(this.promotion.fechaInicio, 'yyyy-MM-dd HH:mm:ss'),
        fechaFin: this.datePipe.transform(this.promotion.fechaFin, 'yyyy-MM-dd HH:mm:ss')
      };
  
      this.promotionService.update(formattedPromotion).subscribe({
        next: (response) => {
          console.log('Promoción actualizada:', response);
          //this.promotion = new Promotion()
          //alert("Promoción creada exitosamente")
          //this.showPromotionCreatedAlert();
        },
        error: (error) => {
          console.error('Promoción actualizada:', error);
          //this.promotion = new Promotion()
          //alert("Promoción creada exitosamente")
          //this.showPromotionCreatedAlert();
        }
      });
      this.router.navigate(['pagina/listarPromocion'])
    }

    modificar(){ //fire actualizado
      console.log(this.promotion)
      this.promotionService.update(this.promotion).subscribe(data => {
        console.log("Resultado WS SAVE", data);
      });
      //this.contacto=new Contacto()
      this.router.navigate(['pagina/listarPromocion'])
      
      }


    showUpdateConfirmation() {
      Swal.fire({
        title: '¿Estás seguro?',
        text: 'Estás a punto de Actualizar la Promoción.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, Actualizar la Promoción',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.modificarp();
          //this.loginService.logout();
        }
      });
    }
}
