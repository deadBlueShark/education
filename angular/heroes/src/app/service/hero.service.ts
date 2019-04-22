import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Hero } from '../model/hero';
import { HEROES } from '../data/mock-heroes';
import { MessageService } from './message.service';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiEndpoint = environment.apiEndpoint;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.apiEndpoint}/heros`)
      .pipe(
        tap(_ => this.log('Heroes fetch.')),
        catchError(this.handlerError<Hero[]>('Fretch heroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiEndpoint}/heros/${id}`)
      .pipe(
        tap(_ => this.log('Hero fetch.')),
        catchError(this.handlerError<Hero>('Fetch hero'))
      );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.patch(`${this.apiEndpoint}/heros/${hero.id}`, {name: hero.name}, httpOptions)
      .pipe(
        tap(_ => this.log('Hero updated.')),
        catchError(this.handlerError<any>('Update hero'))
      );
  }

  createHero(hero: Hero): Observable<any> {
    return this.http.post(`${this.apiEndpoint}/heros`, {hero: hero}, httpOptions)
      .pipe(
        tap(_ => this.log('Hero liberated.')),
        catchError(this.handlerError<Hero>('Liberate hero'))
      );
  }

  deleteHero(hero: Hero): Observable<any> {
    return this.http.delete(`${this.apiEndpoint}/heros/${hero.id}`, httpOptions)
      .pipe(
        tap(_ => this.log('Hero removed.')),
        catchError(this.handlerError<any>('Remove hero.'))
      );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) return of([]);
    return this.http.get<Hero[]>(`${this.apiEndpoint}/heros?term=${term}`, httpOptions)
      .pipe(
        tap(_ => this.log('Hero searched.')),
        catchError(this.handlerError<Hero[]>('Search hero'))
      );
  }

  private log(message: string): void {
    this.messageService.add(`[HeroService] ${message}`);
  }

  /*
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handlerError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(error.message);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
