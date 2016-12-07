import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SharedModule } from "../shared/shared.module";
import { AppComponent } from "./app.component";
import { routing } from "./app.routes";
import { ComingSoonComponent } from "../../components/coming-soon/comingsoon.component";

@NgModule({
  imports: [BrowserModule, SharedModule.forRoot(), routing, HttpModule],
  declarations: [AppComponent, ComingSoonComponent],
  bootstrap: [AppComponent],
  providers: [
  ]
})
export class AppModule{
}