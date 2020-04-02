import { SidebarComponent } from "./sidebar/sidebar.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { TablesComponent } from "./tables/tables.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { InstructorScheduleComponent } from "./instructor-schedule/instructor-schedule.component";
import { UsersComponent } from "./users/users.component";
import { RolesComponent } from './roles/roles.component';
import { SpecialtiesComponent } from './specialties/specialties.component';
import { SpecialtiesUsersComponent } from './specialties-users/specialties-users.component';
import { SpecialtiesProgramsComponent } from './specialties-programs/specialties-programs.component';
import { CourseNumbersComponent } from './course-numbers/course-numbers.component';

export const containers: any[] = [
  SidebarComponent,
  DashboardComponent,
  MyProfileComponent,
  TablesComponent,
  CalendarComponent,
  InstructorScheduleComponent,
  UsersComponent,
  RolesComponent,
  SpecialtiesComponent,
  SpecialtiesUsersComponent,
  SpecialtiesProgramsComponent,
  CourseNumbersComponent
];

export * from "./sidebar/sidebar.component";
export * from "./dashboard/dashboard.component";
export * from "./my-profile/my-profile.component";
export * from "./tables/tables.component";
export * from "./calendar/calendar.component";
export * from "./instructor-schedule/instructor-schedule.component";
export * from "./users/users.component";
export * from './roles/roles.component';
export * from './specialties/specialties.component';
export * from './specialties-users/specialties-users.component';
export * from './specialties-programs/specialties-programs.component';
export * from './course-numbers/course-numbers.component';