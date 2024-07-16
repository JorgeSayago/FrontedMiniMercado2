import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Domain/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  save(producto: Producto) {
    return this.http.post<any>("http://localhost:8001/product/create_product", producto)
  }


  getAll(){
    return this.http.get<any>("http://localhost:8001/product/list_products");
   }



}
