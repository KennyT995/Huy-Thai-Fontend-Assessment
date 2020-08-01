import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getStudentUrl } from '../constants';
import { StudentModel } from '../models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<StudentModel[]> {
    return this.http.get(getStudentUrl).pipe(map(result => result['students']));
  }
}
