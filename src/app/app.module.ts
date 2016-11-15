import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import {AppRoutingModule} from './Routes';
/**************** */
import {AppComponent} from './app.Component'; 
import {HomeComponent} from '../home/Home.Component';
import {LoginComponent} from '../login/Login.Component';


@NgModule({
  imports:      [ BrowserModule,[AppRoutingModule] ],
  declarations : [AppComponent,HomeComponent,LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
