import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sale } from '../Domain/sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<any>("http://localhost:8001/sale/list_sales");
   }

  save(sale: any) {
    return this.http.post<any>("http://localhost:8001/sale/create_sale", sale)
  }

  getSaleByNumeroVenta(numeroVenta: string): Observable<Sale>{
    return this.http.get<Sale>(`http://localhost:8001/sale/search_sale_by_numeroV/${numeroVenta}`)
  }

  updateTotal(id: number,sale: any) {
    const url = `http://localhost:8001/sale/update_saleV1/${id}`;
    return this.http.put(url, sale);
  }

}
