import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/model/animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss']
})
export class AnimalFormComponent {
  @Output() animalAdded = new EventEmitter<Animal>();

  onAddAnimal(nameInputElement: HTMLInputElement, foodInputElement: HTMLInputElement): void {
    this.animalAdded.emit(new Animal(nameInputElement.value, foodInputElement.value));
  }
}
