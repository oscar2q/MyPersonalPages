import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path:'', component:AppComponent },
];

NgModule({
  imports:[RouterModule.forRoot(routes,{
    anchorScrolling:'enabled',
    scrollPositionRestoration:'enabled'
  }),],
  exports:[RouterModule]
})
export class RouterIndex{}
