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
  }

  getAdminBuildInfo(): Observable<any> {
    console.log('getAdminBuildInfo');
    return this.http.get(`${this.uri}/admin/buildDetails`);
  }

  saveAdminBuildInfo(buildDetail: BuildModel): Observable<any> {
    console.log('saveAdminBuildInfo');
    return this.http.post(`${this.uri}/admin/buildDetails`, buildDetail);
  }

  deleteAdminBuildInfo(buildIds: string[]): Observable<any> {
    console.log('deleteAdminBuildInfo');
    return this.http.delete(`${this.uri}/admin/buildDetails/${buildIds.join()}`);
  }

  updateAdminBuildInfo(currentEditId: string, buildDetail: BuildModel): Observable<any> {
    console.log('updateAdminBuildInfo');
    return this.http.put(`${this.uri}/admin/buildDetails/${currentEditId}`, buildDetail);
  }

  addUser(registerForm): Observable<any> {
    console.log(registerForm.value);
    return this.http.post(`${this.uri}/register`, registerForm.value);
  }
  getUserList(): Observable<any> {
    console.log('getUserList');
    return this.http.get(`${this.uri}/getUserList`);
  }
}
