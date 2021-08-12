import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [{provide: MatFormFieldControl, useExisting: LoginComponent}],

})
export class LoginComponent implements OnInit {

  user = { username:'', password:'', remember:false};
  constructor(public diaglogref: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {

  }

  onSubmit(){
      console.log('User: ', this.user);
      this.diaglogref.close();
    
  }

}
