import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseUrl = 'http://localhost:3000/users/';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  constructor(private http: HttpClient) { }
  get(id: any): Observable<Users> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  findByUsername(username: string): Observable<Users[]> {
    return this.http.get<Users[]>(`${baseUrl}?title=${username}`);
  }
}