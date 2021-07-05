import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerHttpService {
  private fake_RestAPI_Server = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getStudent(){
    const url = `${this.fake_RestAPI_Server}/students`;
    return this.http.get<any>(url,this.httpOptions).pipe(catchError(this.handleError)); // hoc thuoc
  }

  getStudentByID(id: any){
    const url = `${this.fake_RestAPI_Server}/students/`+id;
    return this.http.get<any>(url,this.httpOptions).pipe(catchError(this.handleError)); // hoc thuoc
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {

      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  addStudent(student: any){
    const url = `${this.fake_RestAPI_Server}/students`; // trong localhost 3000
    return this.http.post<any>(url,student,this.httpOptions).pipe(catchError(this.handleError)); // hoc thuoc
  }

  deleteStudent(id: any){
    const url = `${this.fake_RestAPI_Server}/students/`+id;
    return this.http.delete<any>(url,this.httpOptions).pipe(catchError(this.handleError)); // hoc thuoc
  }

  updateStudent(id: any, student: any){
    const url = `${this.fake_RestAPI_Server}/students/`+id;
    return this.http.put<any>(url,student,this.httpOptions).pipe(catchError(this.handleError));
  }

  
}
