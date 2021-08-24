import { Injectable } from '@angular/core';
// import { resolve } from 'dns';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { of, Observable } from 'rxjs';
import { delay, map} from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private http: HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) { }

  putDish(dish : Dish) : Observable<Dish>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json'
      })
    };
    return this.http.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }
  getDishes() : Observable<Dish[]>{
    return this.http.get<Dish[]>(baseURL+'dishes').pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(DISHES).pipe(delay(3000));
    // return new Promise(resolve=> {
    //   setTimeout(() => resolve(DISHES),3000);
    // }
    // );
  }

  getDish(id: string) : Observable<Dish>{
    return this.http.get<Dish>(baseURL+'dishes/'+id).pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));

    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]),3000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  }

  getFeaturedDish() : Observable<Dish>{
    return this.http.get<Dish[]>(baseURL+'dishes?featured=true').pipe(map(dishes => dishes[0])).pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]),3000);
    // });
    // return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }

  getDishIDs() : Observable<string[] | any>{
    return this.http.get<Dish[]>(baseURL+'dishes').pipe(map(dishes => dishes.map(dish => dish.id))).pipe(catchError(error => error));
    // return of(DISHES.map(dish => dish.id)); 
  }
}
