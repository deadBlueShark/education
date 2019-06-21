import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent {
  @Input() animal: Animal;
}
