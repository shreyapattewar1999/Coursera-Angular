import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable} from 'rxjs';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS),3000);
    // });
    // return Promise.resolve(PROMOTIONS);

  }

  getPromotion(id: string) : Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]),3000);
    // });
    // return Promise.resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]);
  }

  getFeaturedPromotion() : Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),3000)
    // });
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
}
