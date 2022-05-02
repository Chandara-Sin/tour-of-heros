import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero = {
    id: 1,
    name: 'โดมซอร์ทโค้ด ไหนกันเนี้ย',
  };

  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}
  ngOnInit(): void {
    // this.heroes = this.heroService.getHeros();
    this.heroService.getHeros().subscribe(
      // Next
      (heroes: Hero[]) => (this.heroes = heroes),

      // Err
      (err) => console.log(err),

      // Final
      () => console.log('finally')
    );
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add('HeroesComponent: Select hero id=' + hero.id);
  }
}
