import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
})
export class HeroSearchComponent implements OnInit {
  heroes: Hero[] = [];

  heroes$?: Observable<Hero[]>;

  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term) => this.heroService.searchHeroes(term))
    );
  }

  search(term: string) {
    //   this.heroService
    //     .searchHeroes(term)
    //     .subscribe((heroes) => (this.heroes = heroes));
    // }

    // this.heroes$ = this.heroService.searchHeroes(term);

    this.searchTerms.next(term);
  }
}
