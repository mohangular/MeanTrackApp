import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './user';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:4000';
  public data;
  constructor(private http: HttpClient) { }
  getnotification(): Observable<any> {
    console.log('service');
    return this.http.get(`${this.uri}/notification`);
  }
addUser(user) {
  console.log(user);
  return this.http.post(`${this.uri}/register`, user);
}
}
