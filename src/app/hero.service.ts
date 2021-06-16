import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService:MessageService) { }//service in service

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);// return single value. the heroes array, type: Observable<Hero[]> 
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
