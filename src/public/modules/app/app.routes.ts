import { ModuleWithProviders, Type } from '@angular/core';
import { RouterModule, Routes, Route } from "@angular/router";
import { ComingSoonComponent } from "../../components/coming-soon/comingsoon.component";
export let routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: ComingSoonComponent
  }, {
    path: "404",
    component: ComingSoonComponent
  },
  { path: '**', redirectTo: "404" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
