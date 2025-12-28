import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getproduct(): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }
  getsingleproduct(id: string): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }

}



