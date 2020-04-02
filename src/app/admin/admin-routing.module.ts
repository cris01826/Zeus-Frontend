import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import * as fromContainers from "./containers";
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
const routes: Routes = [
  {
    path: "",
    component: fromContainers.SidebarComponent,
    children: [
      { path: "dashboard", component: fromContainers.DashboardComponent },
      { path: "tables", component: fromContainers.TablesComponent },
      { path: "calendar", component: fromContainers.CalendarComponent },
      { path: "my_profile", component: fromContainers.MyProfileComponent },
      {
        path: "instructor_schedule",
        component: fromContainers.InstructorScheduleComponent
      },
      { path: "users", component: fromContainers.UsersComponent },
      { path: "roles", component: fromContainers.RolesComponent },
      { path: "specialties", component: fromContainers.SpecialtiesComponent },
      { path: "specialties_users", component: fromContainers.SpecialtiesUsersComponent },
      { path: "specialties_programs", component: fromContainers.SpecialtiesProgramsComponent },
      { path: "course", component: fromContainers.CourseNumbersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
