import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../../model/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  @Input() student: Student;
}
