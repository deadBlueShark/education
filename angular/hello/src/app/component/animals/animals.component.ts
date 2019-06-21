import { Component } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  animals: Animal[] = [
    new Animal('Lion', 'Weaker animals')
  ];

  onAnimalAdded(animal: Animal): void {
    this.animals.push(animal);
  }
}
