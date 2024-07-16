import { Injectable } from '@angular/core';
import { Proveedor } from '../Domain/proveedor';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }

  save(proveedor: Proveedor) {
    return this.http.post<any>("http://localhost:8001/supplier/create_supplier", proveedor)
  }


  getAll(){
    return this.http.get<any>("http://localhost:8001/supplier/list_suppliers");
   }
}
