import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ClassroomComponent} from "./classroom/classroom.component";
import {StudentComponent} from "./classroom/student.component";
import {LoginComponent} from "./login - register/login.component";
import {RegisterComponent} from "./login - register/register.component";
import {RouterModule, Routes} from "@angular/router";
import * as path from "path";
import {ThoitietComponent} from "./thoitiet/thoitiet.component";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from "./menu/menu.component";

const appRoutes: Routes = [
  {path:'',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'thoitiet',component: ThoitietComponent},
  {path:'menu',component: MenuComponent},
];

@NgModule({
  declarations: [
    AppComponent,ClassroomComponent, StudentComponent, LoginComponent, RegisterComponent, ThoitietComponent, MenuComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
