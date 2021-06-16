import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);// return single value. the heroes array, type: Observable<Hero[]> 
    return heroes;
  }
}
