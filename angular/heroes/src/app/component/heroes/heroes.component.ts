import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;  // unused property

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  // unused method
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((response) => {
      this.heroes = response;
    });
  }

  createHero(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.createHero({name} as Hero).subscribe((hero) => {
      this.heroes.unshift(hero);
    })
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter((element) => hero !== element);
    this.heroService.deleteHero(hero).subscribe();
  }
}
