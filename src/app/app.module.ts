import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import {ServerHttpService} from './server-http.service';

import { HttpClientModule } from '@angular/common/http';
import { AddingStudentComponent } from './adding-student/adding-student.component';
import { FormsModule } from '@angular/forms';
import { UpdatingComponent } from './updating/updating.component';

import { HeaderComponent } from './header/header.component';

import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    AddingStudentComponent,
    UpdatingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,

  ],
  providers: [ServerHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
