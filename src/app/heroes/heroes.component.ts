import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;//copy, to expose the array for binding

  constructor() { }

  ngOnInit(): void { //It's a good place to put initialization logic.
  }

}
