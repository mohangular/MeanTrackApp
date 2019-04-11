import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimetrackerService {
  uri = 'http://localhost:5550';
  public data;
  constructor(private http: HttpClient) { }

  getTimeTrackerValues(): Observable<any> {
    console.log('service');
    return this.http.get(`${this.uri}/timesheet`);
  }
  
  getTimeTracker
}
