import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { of, Observable} from 'rxjs';
import { delay } from 'rxjs/operators'
import { baseURL } from '../shared/baseurl';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http: HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL+'promotions').pipe(catchError(this.processHTTPMsgService.handleError));

    // return of(PROMOTIONS).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS),3000);
    // });
    // return Promise.resolve(PROMOTIONS);

  }

  getPromotion(id: string) : Observable<Promotion>{
    return this.http.get<Promotion>(baseURL+'promotions/'+id).pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]),3000);
    // });
    // return Promise.resolve(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]);
  }

  getFeaturedPromotion() : Observable<Promotion>{

    return this.http.get<Promotion[]>(baseURL+'promotions?featured=true').pipe(map(promotions=>promotions[0])).pipe(catchError(this.processHTTPMsgService.handleError));
    // return this.http.get<Promotion>(baseURL+)
    // return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]),3000)
    // });
    // return Promise.resolve(PROMOTIONS.filter((promotion) => promotion.featured)[0]);
  }
}
