import { Component, Input, OnInit } from '@angular/core';
import { StudentModel } from '../../shared/models';

@Component({
  selector: 'HTFA-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() student: StudentModel;

  averageTest: number;
  showScores: boolean = true;

  constructor() { }

  ngOnInit(): void {
    let sum = this.student.grades.reduce((a, b) => (+a) + (+b), 0);
    this.averageTest = sum / this.student.grades.length;
  }

  addTag(event) {
    this.student.tags.push(event.target.value);
    event.target.value = '';
  }

}
