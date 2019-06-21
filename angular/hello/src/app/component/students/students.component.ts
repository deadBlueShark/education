import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [
    new Student('Le Chi Nguyen', 'Software Engineering')
  ];

  constructor() {
    console.log('Students Constructor');
  }

  ngOnInit(): void {
    console.log('Students Oninit');
  }

  onStudentCreated(student: Student): void {
    this.students.push(student);
  }
}
