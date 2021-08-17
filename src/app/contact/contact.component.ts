import { Component, OnInit } from '@angular/core';
import { Feedback, ContactType } from '../shared/feedback';
import { MatSelectModule} from '@angular/material/select';

import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // feedbackForm: FormGroup;
  feedback : Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) {
    
   }
   feedbackForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      telnum: [0],
      email: [''],
      agree: [false],
      contacttype: ['None'],
      message : ['']
   });
   

   ngOnInit(): void {
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }
}
