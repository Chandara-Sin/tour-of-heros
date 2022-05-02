import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesURL = 'http://localhost:8080/heroes/';

  constructor(
    private messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES).pipe(delay(3000))

    // const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    // return heroes;

    return this.httpClient.get<Hero[]>(this.heroesURL);

    // return throwError(() => new Error("404 not found"))
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    // const hero = HEROES.find((item) => item.id === id)!;
    // return of(hero);
    return this.httpClient.get<Hero>(this.heroesURL + id);
  }

  httpOption = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(this.heroesURL, hero, this.httpOption);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroesURL + '?q=' + term);
  }
}
