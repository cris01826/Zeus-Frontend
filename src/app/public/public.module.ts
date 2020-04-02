import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicRoutingModule } from "./public-routing.module";
import { MaterialModule } from "../material/material.module";
import * as fromContainers from "./containers";
import { FormsModule } from "@angular/forms";




import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [...fromContainers.containers],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    
  ]
})
export class PublicModule {}

export function HttpLoaderFactory(http: HttpClient) {
  
}
