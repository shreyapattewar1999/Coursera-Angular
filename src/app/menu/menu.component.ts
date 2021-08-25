import { Component, Inject, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';
import { baseURL } from '../shared/baseurl';
import { flyInOut, expand } from '../animations/app.animation';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class MenuComponent implements OnInit {

  dishes: Dish[];
  errMsg: string;
  // selectedDish : Dish;
  
  constructor(private _dishService:DishService,
    @Inject('BaseURL') public baseURL:any) { }

  ngOnInit(): void {
    this._dishService.getDishes().subscribe(dishes => this.dishes = dishes, error => this.errMsg = error);
  }

  // onSelect(dish: Dish) {
  //   this.selectedDish = dish;
  // }
}
