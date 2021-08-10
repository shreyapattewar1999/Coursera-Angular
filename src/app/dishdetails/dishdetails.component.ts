import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
// const DISH: Dish

@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.scss']
})
export class DishdetailsComponent implements OnInit {
//   dishes: Dish[] = DISHES;
//   comments=this.dishes[0].comments;

    // @Input()
    dish:Dish;
  constructor(private dishservice : DishService,
    private route : ActivatedRoute,
    private location : Location) {   }
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }

  goback() : void {
    this.location.back();
  }

}
