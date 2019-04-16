import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuildModel } from './models/buildModel';
import { ModuleModel } from './models/moduleModel';
import { WorkItemModel } from './models/workItemModel';

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

  addUser(user): Observable<any> {
    console.log(user);
    return this.http.post(`${this.uri}/register`, user);
  }
  getUserList(): Observable<any> {
    console.log('getUserList');
    return this.http.get(`${this.uri}/getUserList`);
  }
  getAdminModuleInfo(): Observable<any> {
    console.log('getAdminModuleInfo');
    return this.http.get(`${this.uri}/admin/moduleDetails`);
  }
  saveAdminModuleInfo(module: ModuleModel): Observable<any> {
    console.log('saveAdminModuleInfo');
    return this.http.post(`${this.uri}/admin/moduleDetails/`, module);
  }
  updateAdminModuleInfo(moduleDetail: ModuleModel, updateId: string): Observable<any> {
    console.log('updateAdminModuleInfo');
    return this.http.put(`${this.uri}/admin/moduleDetails/` + updateId, moduleDetail);
  }
  deleteAdminModuleInfo(buildIds: string[]): Observable<any> {
    console.log('deleteAdminModuleInfo');
    return this.http.delete(`${this.uri}/admin/moduleDetails/${buildIds.join()}`);
  }
  getAdminWorkItemInfo(): Observable<any> {
    console.log('getAdminModuleInfo');
    return this.http.get(`${this.uri}/admin/workItemDetails`);
  }
  saveAdminWorkItemInfo(workItem: WorkItemModel): Observable<any> {
    console.log('saveAdminModuleInfo' + workItem);
    return this.http.post(`${this.uri}/admin/workItemDetails/`, workItem);
  }
  updateAdminWorkItemInfo(workItem: WorkItemModel, updateId: string): Observable<any> {
    console.log('updateAdminModuleInfo');
    return this.http.put(`${this.uri}/admin/workItemDetails/` + updateId, workItem);
  }
  deleteAdminWorkItemInfo(buildIds: string[]): Observable<any> {
    console.log('deleteAdminModuleInfo');
    return this.http.delete(`${this.uri}/admin/workItemDetails/${buildIds.join()}`);
  }
}
