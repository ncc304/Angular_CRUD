import { UpdatingComponent } from './updating/updating.component';
import { AddingStudentComponent } from './adding-student/adding-student.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'student', component: StudentsComponent },
  { path: 'addStudent', component: AddingStudentComponent },
  { path: 'updateStudent/:id', component: UpdatingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
