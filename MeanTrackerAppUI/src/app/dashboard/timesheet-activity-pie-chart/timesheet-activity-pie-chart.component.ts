import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import {DashboardService} from '.././../dashboard.service'
import {AuthenticationService} from '.././../authentication.service'


@Component({
  selector: 'app-timesheet-activity-pie-chart',
  templateUrl: './timesheet-activity-pie-chart.component.html',
  styleUrls: ['./timesheet-activity-pie-chart.component.css']
})

export class TimesheetPieChartComponent implements OnInit {
 // public pieChartLabels = ['Coding', 'Analysis', 'Unit Testing', 'Review'];
  public pieChartLabels :string[]= [];
  //public pieChartData = [80, 40, 25, 8];
  public pieChartData :Number[]= [];
  public pieChartType = 'pie';
  
  constructor(private Service: DashboardService,private authService:AuthenticationService){
   // var dashboard = Service.getDashboard().subscribe((data:TimeTracker))    
   var userDetails =  authService.getUserDetails(); 
   this.Service.getDashboard(userDetails.mid).subscribe(result =>{
      //console.log(result);
      this.getChartData(result);
      });
  }
  
  public getChartData(obj):any
    {
      //console.log(obj);
      let labels:string[] = [];
      let data:number[] = [];
      for (var i = 0; i < obj.length; i++)
      {
        labels.push(String(obj[i]._id.activity));
        data.push((obj[i].totalHours/8)*100);
      };
      this.pieChartData = data;
      this.pieChartLabels = labels;
      
    }
  
  public pieChartColor:any = [
    {
        backgroundColor: ['rgba(30, 169, 224, 0.8)',
        'rgba(255,165,0,0.9)',
        'rgba(139, 136, 136, 0.9)',
        'rgba(255, 161, 136, 0.9)'        
        ]
    }




]
  
  
  ngOnInit() {
    
  }
}