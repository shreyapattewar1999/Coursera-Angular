import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

// const DISH: Dish

@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss']
})
export class DishdetailsComponent implements OnInit {
//   dishes: Dish[] = DISHES;
//   comments=this.dishes[0].comments;

    @Input()
    dish:Dish;
  constructor() { }
  
  ngOnInit(): void {
  }

}
