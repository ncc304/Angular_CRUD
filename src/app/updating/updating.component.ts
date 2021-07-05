import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServerHttpService } from '../server-http.service';

@Component({
  selector: 'app-updating',
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.css']
})
export class UpdatingComponent implements OnInit {
  name:any = "";
  age: any = "";
  id: any = 0;
  constructor(private server: ServerHttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id > 0){
      this.loadData(this.id);
    }
  }

  onSubmit(){
    console.log('Updatess data: ',this.name);
    console.log('Updatssse data: ',this.age);
    const newStudent = {'name':this.name, 'age':this.age}
    this.server.updateStudent(this.id,newStudent).subscribe(data=>{
      console.log('Update data: ',data);
      this.router.navigate(['student']);
    })
    
  }

  private loadData(id:any){
    console.log("load data id ", id);
    this.server.getStudentByID(id).subscribe(data=>{
      console.log("get data: ",data);
      this.name = data.name;
      this.age = data.age;
    })
  }

}
