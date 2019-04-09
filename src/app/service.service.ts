import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    // .subscribe(res => {
     // this.data = res;
     // console.log('amhere', this.data);
    // });
    return this.data;
}
addUser(): Observable<any> {
  this.http.get(`${this.uri}/notification`);
}
}
