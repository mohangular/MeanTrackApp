import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public NotificationResponse;
  public date;
  public hours;
  public month;
  public day;
  public formattedDate;
  public newDate;
  public year;
  public notFilledDays;
  public displayCondition = 'false';
  constructor(private notification: ServiceService) { }
  ngOnInit() {
    // this.getnotification();
  }
  getnotification() {
    this.NotificationResponse = this.notification.getnotification()
    .subscribe(res => {
      console.log('am ts', res);
      this.date = res.res['0']._id;
      this.hours = res.res['0'].sumOfHours;
      console.log(this.date);
      console.log(this.hours);
      this.newDate = new Date(this.date);
      console.log(this.newDate);
      this.year = this.newDate.getFullYear();
      this.month = this.newDate.getMonth() + 1;
      this.day = this.newDate.getDate();
      console.log(this.year);
      console.log(this.month);
      console.log(this.day);
      const d = new Date();
      const currentyear = d.getFullYear();
      const currentmonth = d.getMonth() + 1;
      const currentday = d.getDate();
      console.log(currentyear);
      console.log(currentmonth);
      console.log(currentday);
      function isWeekday(currentyear, currentmonth, currentday) {
        currentday = new Date(currentyear, currentmonth, currentday).getDay();
        return currentday !== 0 && currentday !== 6;
        }
      function getWeekdaysInMonth(currentmonth, currentyear) {
        let weekdays = 0;
        for (let i = 0; i < currentday; i++) {
            if (isWeekday(currentyear, currentmonth, i + 1)) {
              weekdays++;
            }
        }
        return weekdays;
      }
      if (currentmonth === this.month) {
        console.log('true');
        this.displayCondition = 'true';
        isWeekday(currentyear, currentmonth, currentday);
        getWeekdaysInMonth(currentmonth, currentyear);
        const weekdays = getWeekdaysInMonth(currentmonth, currentyear);
        console.log('weekdays', weekdays);
        this.notFilledDays = weekdays - this.day;
        console.log('this.notFilledDays', this.notFilledDays);
        const weekdaysHours = weekdays * 8;
        console.log(weekdaysHours);
        const enteredhours = this.day * 8;
        if (weekdaysHours > enteredhours) {
        console.log('notification');
        const needToFillHours = weekdaysHours - enteredhours;
        console.log(needToFillHours);
        const noOfDaysNotEntered = Math.ceil (needToFillHours / 8);
        console.log(noOfDaysNotEntered);
      }
    } else {
      this.displayCondition = 'false';
    }
    });
   }
}
