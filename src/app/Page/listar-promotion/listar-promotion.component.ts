import { Component } from '@angular/core';
import { Promotion } from '../../Domain/promotion';
import { PromotionService } from '../../services/promotion.service';
import Swal from 'sweetalert2';
import { Router, NavigationExtras } from '@angular/router';


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

 eliminar(promotion: Promotion){
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Estás a punto de Eliminar la Promoción.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, Eliminar la Promoción',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this.promotionService.delete(promotion).subscribe(data => {
        console.log("resultado WS save", data);
        });
    this.reloadPage();
    }
  });
  }

reloadPage(){
  let currentUrl = this.router.url
  this.router.navigateByUrl("/", {skipLocationChange: true}).then(
    () =>{
      this.router.navigate([currentUrl])
    }
  )
 }

 editar(promotion: Promotion){
  console.log(promotion)
  let params: NavigationExtras = {
    queryParams: {
      Promotion: promotion,
    }
  }
  this.router.navigate(['pagina/ActualizarPromotion'], params)
}

}
