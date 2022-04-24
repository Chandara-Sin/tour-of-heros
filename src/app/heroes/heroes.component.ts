import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'โดมซอร์ทโค้ด ไหนกันเนี้ย',
  };

  selectedHero?: Hero;
  heroes = HEROES;

  onSelect(selectedHero: Hero) {
    this.hero = selectedHero;
  }

  constructor() {}
  ngOnInit(): void {}
}
