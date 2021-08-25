import { Component, Inject, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { ThrowStmt } from '@angular/compiler';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
  dishErrMsg: string;
  promotionErrMsg: string;
  leaderErrMsg: string;

  constructor(private dishservice: DishService, 
    private promotionservice: PromotionService, 
    private leaderservice: LeaderService,
    @Inject('BaseURL') public baseURL:any) {
     }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, error => this.dishErrMsg = error);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, error=> this.promotionErrMsg = error);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader, error => this.leaderErrMsg = error);
  }

}
