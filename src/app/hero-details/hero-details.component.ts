import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  @Input()
  hero?: Hero;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.heroService
    //   .getHeroes()
    //   .subscribe(
    //     (heroes) => (this.hero = heroes.find((item) => item.id === Number(id)))
    //   );
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack() {
    this.location.back();
  }
}
