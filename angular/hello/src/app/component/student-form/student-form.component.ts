import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {
  @Output() studentCreated = new EventEmitter<Student>();
  name: string;
  major: string;

  onTypeName(event: Event): void {
    this.name = (event.target as HTMLInputElement).value;
  }

  onChangeMajor(event: Event): void {
    this.major = (event.target as HTMLInputElement).value;
  }

  onAddStudent(): void {
    this.studentCreated.emit(new Student(this.name, this.major));
  }
}
