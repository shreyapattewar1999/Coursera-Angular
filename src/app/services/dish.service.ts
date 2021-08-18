import { Injectable } from '@angular/core';
// import { resolve } from 'dns';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, Observable } from 'rxjs';
import { delay} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes() : Observable<Dish[]>{
    return of(DISHES).pipe(delay(3000));
    // return new Promise(resolve=> {
    //   setTimeout(() => resolve(DISHES),3000);
    // }
    // );
  }

  getDish(id: string) : Observable<Dish>{
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));

    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]),3000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish() : Observable<Dish>{
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]),3000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
