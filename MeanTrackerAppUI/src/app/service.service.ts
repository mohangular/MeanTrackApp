import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuildModel } from './models/buildModel';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  uri = 'http://localhost:5550';
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
  /*addUser(): Observable<any> {
    return this.http.get(`${this.uri}/notification`);
  }*/



  getAdminBuildInfo(): Observable<BuildModel[]> {
    console.log('getAdminBuildInfo');
    return this.http.get(`${this.uri}/notification`);
    // .subscribe(res => {
    return new BuildModel[1]();
  }
}
