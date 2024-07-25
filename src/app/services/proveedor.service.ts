import { Injectable } from '@angular/core';
import { Proveedor } from '../Domain/proveedor';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


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

   delete(proveedor: Proveedor) {
    const url = `http://localhost:8001/supplier/deleteSup`;
    return this.http.delete(url ,{ body: proveedor });
  }

  update(proveedor: Proveedor) {
    const url = `http://localhost:8001/supplier/updateSup`;
    return this.http.put(url, proveedor);
  }

  getProveedorById(id: number): Observable<Proveedor>{
    return this.http.get<Proveedor>(`http://localhost:8001/supplier/search_supplier_by_ID/${id}`)
  }

}
