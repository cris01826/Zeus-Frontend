import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from "./containers";
import { LoginComponent } from './containers';

const routes: Routes = [
  
    {path:'login', component:fromContainers.LoginComponent},
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }