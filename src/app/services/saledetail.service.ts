import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleDetail } from '../Domain/saledetail';

@Injectable({
  providedIn: 'root'
})
export class SaledetailService {

  constructor(private http: HttpClient) { }

  save(saledetail: any) {
    return this.http.post<any>("http://localhost:8001/sale-detail/create_saleDetail",saledetail)
  }

  getAll(id : number){
    return this.http.get<any>(`http://localhost:8001/sale-detail/list_salesDetallesIDVenta/${id}`);
   }

   getTotalPriceBySaleId(saleId: number): Observable<number> {
    return this.http.get<number>(`http://localhost:8001/sale-detail/total-price/${saleId}`);
  }

   delete(saledetail: SaleDetail) {
    const url = `http://localhost:8001/sale-detail/delete_saleDetailV1`;
    return this.http.delete(url ,{ body: saledetail });
  }
}
