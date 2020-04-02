import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PublicModule } from "./public/public.module";
import { AdminModule } from './admin/admin.module';
AdminModule

const routes: Routes = [
  { path: "", redirectTo: "public/login", pathMatch: "full" },
  { path: "public", loadChildren: "./public/public.module#PublicModule" },
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
