import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/signin';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  logout () {
    this.loggedIn = false;
  }
  login () {
    this.loggedIn = true;
  }
}
