import { Component, OnInit } from '@angular/core';

import { StudentService } from '../../shared/services';
import { StudentModel } from 'src/app/shared/models';

@Component({
  selector: 'HTFA-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students: Array<StudentModel> = new Array();
  filteredStudents: Array<StudentModel> = new Array();

  byName = '';
  byTags = '';

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe(result => {
      result.forEach(student => {
        this.students.push(new StudentModel(student));
      });
      this.filteredStudents = this.students;
    },
      error => console.error(error));
  }

  filterByStudents(event) {

    this.filteredStudents = this.students.filter(student =>
      (
        student.firstName.toLowerCase().includes(this.byName.toLowerCase()) ||
        student.lastName.toLowerCase().includes(this.byName.toLowerCase())
      ) &&
      this.searchByTags(student)
    )
    console.log(this.filteredStudents, this.students);
  }

  searchByTags(student): boolean {
    let found: boolean;
    //check if there is at least one tag for the student 
    //or searched tag is not an empty string
    student.tags.length > 0 || this.byTags != '' ? found = false : found = true;

    student.tags.forEach(tag => {
      if (tag.toLowerCase().includes(this.byTags.toLowerCase())) {
        console.log("found");
        found = true;
      }
    });
    return found;
  }

}
