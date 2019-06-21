import { Component } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [
    new Hero('Captain America', 'Captain America')
  ];

  onHeroAdded(hero: Hero): void {
    this.heroes.push(hero);
  }
}
