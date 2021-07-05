import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../server-http.service';

@Component({
  selector: 'app-adding-student',
  templateUrl: './adding-student.component.html',
  styleUrls: ['./adding-student.component.css']
})
export class AddingStudentComponent implements OnInit {
  name: any = "";
  age: any = "";
  check = false;
  constructor(private server: ServerHttpService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    const newStudent = {"name": this.name, "age": this.age};
    this.server.addStudent(newStudent).subscribe(data=>{
      console.log("student",data);
    })
    this.name = "";
    this.age = "";
    this.check = true;
  }
}
