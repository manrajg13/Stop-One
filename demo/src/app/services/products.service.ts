import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

const baseUrl = 'http://localhost:3000/products/';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private http: HttpClient) { }
  get(id: any): Observable<Products> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  findByname(name: string): Observable<Products[]> {
    return this.http.get<Products[]>(`${baseUrl}?title=${name}`);
  }
}