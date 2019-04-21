import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../model/hero';
import { HEROES } from '../data/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('[HeroService] Heroes Fetched.');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('[HeroService] Hero Fetched');
    return of(HEROES.find((e) => e.id == id));
  }
}
