import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Promotion } from '../Domain/promotion';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient) { }

  save(promotion: any) {
    return this.http.post<any>("http://localhost:8001/promotion/create_promotion", promotion)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8001/promotion/list_promotions");
   }

   delete(promotion: Promotion) {
    const url = `http://localhost:8001/promotion/deleteProm`;
    return this.http.delete(url ,{ body: promotion });
  }

  update(promotion: any) {
    const url = `http://localhost:8001/promotion/updateProm`;
    return this.http.put(url, promotion);
  }

}
