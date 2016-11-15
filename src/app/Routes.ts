

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.Component';
import { HomeComponent } from '../home/Home.Component';
import { LoginComponent } from '../login/Login.Component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [AppRoutingModule];