import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  uri = 'http://localhost:5550/dashboard';

  constructor(private http: HttpClient) { }

   getDashboard(mid:String) {
    return this
           .http
           .get(`${this.uri}`+ '/' + mid);
  }
  
}