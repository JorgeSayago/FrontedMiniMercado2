import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../Domain/order';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  save(order: any) {
    return this.http.post<any>("http://localhost:8001/order/create_order", order)
  }
}
