import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) { }
  heroes: Hero[] = [];

  selectedHero?: Hero;

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();//get from the service
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void { //It's a good place to put initialization logic.
 
 this.getHeroes(); }

}
