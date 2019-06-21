import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  @Output() heroAdded = new EventEmitter<Hero>();
  @ViewChild('nameInputElement') nameInputElement: ElementRef;
  @ViewChild('foodInputElement') foodInputElement: ElementRef;

  onAddHero(): void {
    this.heroAdded.emit(
      new Hero(this.nameInputElement.nativeElement.value, this.foodInputElement.nativeElement.value)
    );
  }
}
