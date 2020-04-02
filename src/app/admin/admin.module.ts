import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromComponents from "./components";
import * as fromContainers from "./containers";
import { AdminRoutingModule } from "./admin-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MaterialModule } from "../material/material.module";
import { TablesComponent } from './containers/tables/tables.component';
import { CalendarComponent } from './containers/calendar/calendar.component';
import { MyProfileComponent } from './containers/my-profile/my-profile.component';
import { InstructorScheduleComponent } from './containers/instructor-schedule/instructor-schedule.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DescriptionClassRoomsComponent } from './containers/description-class-rooms/description-class-rooms.component';
import { ClassRoomsComponent } from './containers/class-rooms/class-rooms.component';
import { BlocksComponent } from './containers/blocks/blocks.component';
import { UsersComponent } from './containers/users/users.component';
import { SubjectsUsersComponent } from './containers/subjects-users/subjects-users.component';
import { SpecialtiesUsersComponent } from './containers/specialties-users/specialties-users.component';
import { SpecialtiesProgramsComponent } from './containers/specialties-programs/specialties-programs.component';
import { SpecialtiesComponent } from './containers/specialties/specialties.component';
import { SubjectsComponent } from './containers/subjects/subjects.component';
import { ProgramsComponent } from './containers/programs/programs.component';
import { TypeProgramsComponent } from './containers/type-programs/type-programs.component';
import { ProfessionsComponent } from './containers/professions/professions.component';
import { RolesComponent } from './containers/roles/roles.component';
import { ContractTypesComponent } from './containers/contract-types/contract-types.component';
import { HeadquartersComponent } from './containers/headquarters/headquarters.component';
import { CentersComponent } from './containers/centers/centers.component';
import { CourseNumbersComponent } from './containers/course-numbers/course-numbers.component';
@NgModule({
  entryComponents: [...fromComponents.components, ...fromContainers.containers],
  declarations: [...fromComponents.components, ...fromContainers.containers, TablesComponent, CalendarComponent, MyProfileComponent, InstructorScheduleComponent, DescriptionClassRoomsComponent, ClassRoomsComponent, BlocksComponent, UsersComponent, SubjectsUsersComponent, SpecialtiesUsersComponent, SpecialtiesProgramsComponent, SpecialtiesComponent, SubjectsComponent, ProgramsComponent, TypeProgramsComponent, ProfessionsComponent, RolesComponent, ContractTypesComponent, HeadquartersComponent, CentersComponent, CourseNumbersComponent],
  imports: [
    CommonModule,
    FormsModule,
    FullCalendarModule,
    AdminRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,

  ]
})
export class AdminModule {}
