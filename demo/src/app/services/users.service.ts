import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseUrl = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }
  get(_id: any): Observable<Users> {
    return this.http.get(`${baseUrl}/${_id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}