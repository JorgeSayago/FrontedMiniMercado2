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

}
