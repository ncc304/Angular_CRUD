import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../server-http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  students: any[] = [];
  constructor(private server: ServerHttpService, private router: Router) {}

  ngOnInit(): void {
    this.loadData();
  }
  private loadData() {
    this.server.getStudent().subscribe((data) => {
      console.log('student', data);
      this.students = data;
    });
  }

  deleteStudent(id: any) {
    this.server.deleteStudent(id).subscribe((data) => {
      console.log('Student deleted with ID: ', id);
    });
    this.loadData();
  }

  navigateUpdate(id: any) {
    this.router.navigate(['updateStudent', id]);
  }

  nagivateAdd(){
    this.router.navigate(['addStudent']);
  }
}
