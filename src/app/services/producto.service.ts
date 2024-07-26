import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../Domain/producto';
import { Observable } from 'rxjs';

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

   delete(producto: Producto) {
    const url = `http://localhost:8001/product/deletePro`;
    return this.http.delete(url ,{ body: producto });
  }

  update(producto: Producto) {
    const url = `http://localhost:8001/product/updatePro`;
    return this.http.put(url, producto);
  }


  getProductoById(id: number): Observable<Producto>{
    return this.http.get<Producto>(`http://localhost:8001/product/search_product_by_ID/${id}`)
  }

  updateStockProducto(id: number , producto:Producto){
    const url = `http://localhost:8001/product/update_productV1/${id}`;
    return this.http.put(url, producto);
  }

  updateStockProductoVenta(id: number , producto:Producto){
    const url = `http://localhost:8001/product/update_productV2/${id}`;
    return this.http.put(url, producto);
  }

}
