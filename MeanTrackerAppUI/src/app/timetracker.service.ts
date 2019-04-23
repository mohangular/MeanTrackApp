import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { timeSheetEntry } from './models/timeSheetEntry'

@Injectable({
  providedIn: 'root'
})
export class TimetrackerService {
  uri = 'http://localhost:5550';
  public data;
  constructor(private http: HttpClient) { }

  getTimeTrackerValues(selectedDate: Date): Observable<any> {
    return this.http.get(`${this.uri}/timesheet/${selectedDate}`);
  }

  addTimeSheetEntry(timeSheetEntry: timeSheetEntry): Observable<any>{
    return this.http.post(`${this.uri}/timesheet/addtimesheet`, timeSheetEntry);
  }

  updateTimeSheetEntry(timeSheetEntry:timeSheetEntry):Observable<any>{
    console.log('serve');
    console.log(timeSheetEntry);
    return this.http.put(`${this.uri}/timesheet/update`, timeSheetEntry);
  }

  deleteTimeSheetEntry(id:string):Observable<any>{
    return this.http.delete(`${this.uri}/timesheet/delete/${id}`);
  }
  
  getOnLoadDetails():Observable<any>{
    return this.http.get(`${this.uri}/timesheet/onLoadDetails`);
  }
}
