import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';

const baseUrl = 'http://localhost:3000/signin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  logout () {
    localStorage.setItem('loggedIn', 'false');
  }
  login () {
    localStorage.setItem('loggedIn', 'true');
  }

  getlogin() {
    return localStorage.getItem('loggedIn');
  }
}
