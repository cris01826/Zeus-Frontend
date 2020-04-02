import { Component, OnInit } from "@angular/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import * as moment from "moment";
@Component({
  selector: "app-instructor-schedule",
  templateUrl: "./instructor-schedule.component.html",
  styleUrls: ["./instructor-schedule.component.scss"]
})
export class InstructorScheduleComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  dayslabel = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
  constructor() {}
  currentMonth;
  monthtitle;
  listWeek;
  listMonth = [];
  totalday = [];

  ngOnInit() {
    moment.locale("es");
    this.currentMonth = moment();
    this.monthtitle = moment(this.currentMonth).format("MMMM YYYY");
    this.generateDate(this.currentMonth);
  }

  goNextMonth() {
    this.currentMonth.add(1, "months");
    this.monthtitle = moment(this.currentMonth).format("MMMM YYYY");
    this.generateDate(this.currentMonth);
  }

  goPreviousMonth() {
    this.currentMonth.subtract(1, "months");
    this.monthtitle = moment(this.currentMonth).format("MMMM YYYY");
    this.generateDate(this.currentMonth);
  }
  public generateDate(monthToShow) {
    try {
      if (!moment.isMoment(monthToShow)) {
        return null;
      }
      this.totalday = [];
      let dateStart = moment(monthToShow).startOf("month");
      let dateEnd = moment(monthToShow).endOf("month");

      while (dateStart.day() !== 1) {
        dateStart.subtract(1, "days");
      }
      while (dateEnd.day() !== 0) {
        dateEnd.add(1, "days");
      }

      var week = 1;
      var day = 7;
      this.listWeek;

      console.log(this.listWeek);
      for (var w = 0; w < 6; w++) {
        let days = [];

        for (var i = 0; i < day; i++) {
          const dayreal = moment(dateStart).date();

          this.listMonth = [];

          const newdate = {
            day: dayreal,
            month: dateStart.month() === monthToShow.month()
          };
          days.push(newdate);
          dateStart.add(1, "days");
        }

        this.totalday.push({
          week: week,
          days: days
        });
        week++;
      }

      console.log(this.totalday);
    } catch (error) {}
  }
}
