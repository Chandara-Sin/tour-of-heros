import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heros';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    // const heroes = of(HEROES).pipe(delay(3000))
    const heroes = of(HEROES)
    this.messageService.add("HeroService: fetched service")
    return heroes;

    // return throwError(() => new Error("404 not found"))
  }
}
