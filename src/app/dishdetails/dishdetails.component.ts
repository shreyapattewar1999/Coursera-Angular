import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
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
    selectedDish : Dish;
    dishIds: string[];
    prev: string;
    next: string;

  constructor(private dishService : DishService,
    private route : ActivatedRoute,
    private location : Location) {   }
  
  ngOnInit(): void {
    this.dishService.getDishIDs()
    .subscribe((dishIds) => this.dishIds = dishIds);
  this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id) });
}

setPrevNext(dishIds: string) {
  const index = this.dishIds.indexOf(dishIds);
  this.prev = this.dishIds[(this.dishIds.length + index - 1 ) % this.dishIds.length];
  this.next = this.dishIds[(this.dishIds.length + index + 1 ) % this.dishIds.length];
    // const id = this.route.snapshot.params['id'];
    // this.dishservice.getDish(id).subscribe(dish => this.dish = dish);
  }

  goBack() : void {
    this.location.back();
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
