import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

const baseUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  subtotal: number;
  constructor(private http: HttpClient) {
    this.subtotal = 0;
  }
  getAll(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }
  get(_id: any): Observable<Products> {
    return this.http.get(`${baseUrl}/${_id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}