import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sale } from '../Domain/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  save(sale: any) {
    return this.http.post<any>("http://localhost:8001/sale/create_sale", sale)
  }
}
