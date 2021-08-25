import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { of, Observable } from 'rxjs';
import { delay,map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseURL } from '../shared/baseurl';
import { Promotion } from '../shared/promotion';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,
    private processHTTPMsgService : ProcessHTTPMsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL+'leadership').pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(LEADERS).pipe(delay(3000));

    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS),3000);
    // }
    // );
      // return Promise.resolve(LEADERS);
  }

  getLeader(id: string) : Observable<Leader>{
    return this.http.get<Leader>(baseURL+'leadership/'+id).pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(LEADERS.filter((leader) => (leader.id === id))[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => (leader.id === id))[0]),3000);
    // });
    // return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]);
  }

  getFeaturedLeader() : Observable<Leader>{
    return this.http.get<Leader[]>(baseURL+'leadership?featured=true').pipe(map(leaders => leaders[0])).pipe(catchError(this.processHTTPMsgService.handleError));
    // return of(LEADERS.filter((leader) => leader.featured)[0]).pipe(delay(3000));
    // return new Promise(resolve => {
    //   setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]),3000);
    // });
    // return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
  }
}
