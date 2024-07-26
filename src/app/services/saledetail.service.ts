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
}
