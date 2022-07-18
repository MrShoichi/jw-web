import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import "rxjs/operators";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: any;
  user: any;

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  registerUser(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('account/reg', user, httpOptions).pipe(map((response: any) => JSON.parse(JSON.stringify(response))));

  }

  authUser(user): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post('account/auth', user, httpOptions).pipe(map((response: any) => JSON.parse(JSON.stringify(response))));

  }

  storeUser(token, user) {
    localStorage.setItem('token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.token = token;
    this.user = user;
  }

  logout() {
    this.token = null;
    this.user = null;
    localStorage.clear();
  }

  isLoggedIn() {
    return !this.jwtHelper.isTokenExpired(this.token);
  }
}
