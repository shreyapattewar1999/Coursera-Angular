import { Component, OnInit, Input, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// const DISH: Dish
import { Comment } from '../shared/comment';


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
    dishErrMsg : string;
    dishCopy : Dish;
    comment: Comment;
    commentForm: FormGroup;
    prev_comment = '';
    prev_author ='';
    prev_rating = 0;

  constructor(private dishService : DishService,
    private route : ActivatedRoute,
    private location : Location,
    private fb: FormBuilder,
    @Inject('BaseURL') public baseURL: any) {  
      this.createForm();
     }
  
    
  ngOnInit(): void {
    this.dishService.getDishIDs()
    .subscribe((dishIds) => this.dishIds = dishIds);
  this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.dishCopy = dish; this.setPrevNext(dish.id) }, error => this.dishErrMsg = error);
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

  formErrors : any ={
    'author':'',
    'rating' : '',
    'comment' : ''
  }

  validationMessages : any = {
    'author' : {
      'required':      'Author Name is required.',
      'minlength':     'Author Name must be at least 2 characters long.',
      'maxlength':     'Author Name cannot be more than 25 characters long.'
    },
    'comment' : {
      'required':      'Comment is required.',
      'minlength':     'Comment must be at least 5 characters long.',
      'maxlength':     'Comment cannot be more than 50 characters long.'
    },
  }
  createForm(){
    this.commentForm = this.fb.group({
      author:['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      rating: [5],
      comment:['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
    });
    
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
    
  }

  onValueChanged(data?: any){
    if(!this.commentForm){return;}
    const form = this.commentForm;
    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){
        this.formErrors[field] = '';
        const control = form.get(field);
        if(control || control.dirty || control.invalid || control.touched ){
         const messages = this.validationMessages[field]; 
         for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + ' ';
            // console.log(this.formErrors[field]);
          }
        }
      }
    }

  }
}
  onSubmit(){
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dishCopy.comments.push(this.comment);
    this.dishService.putDish(this.dishCopy).subscribe(dish => {this.dish = dish; this.dishCopy = this.dish}
      ,errmess => {this.dish = null; this.dishCopy = null; this.dishErrMsg = errmess;} );
    
    this.comment = null;
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5
    });

    
  }
}
