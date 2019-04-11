import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-timesheet-activity-pie-chart',
  templateUrl: './timesheet-activity-pie-chart.component.html',
  styleUrls: ['./timesheet-activity-pie-chart.component.css']
})
export class TimesheetPieChartComponent implements OnInit {
  public pieChartLabels = ['Coding', 'Analysis', 'Unit Testing', 'Review'];
  public pieChartData = [80, 40, 25, 8];
  public pieChartType = 'bar';
  

  public pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 136, 0.9)'        
        ]
    }




]
  
  constructor() { }
  ngOnInit() {
    
  }
}