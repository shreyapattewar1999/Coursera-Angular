import { Injectable } from '@angular/core';
// import { resolve } from 'dns';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, Observable } from 'rxjs';
import { delay, map} from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient) { }
  getDishes() : Observable<Dish[]>{

    return this.http.get<Dish[]>(baseURL+'dishes');
    // return of(DISHES).pipe(delay(3000));
    // return new Promise(resolve=> {
    //   setTimeout(() => resolve(DISHES),3000);
    // }
    // );
  }

  getDish(id: string) : Observable<Dish>{
    return this.http.get<Dish>(baseURL+'dishes/'+id);
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));

    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]),3000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish() : Observable<Dish>{
    return this.http.get<Dish[]>(baseURL+'dishes?featured=true').pipe(map(dishes => dishes[0]));
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]),3000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }

  getDishIDs() : Observable<string[] | any>{
    return this.http.get<Dish[]>(baseURL+'dishes').pipe(map(dishes => dishes.map(dish => dish.id)));
    // return of(DISHES.map(dish => dish.id)); 
  }
}
