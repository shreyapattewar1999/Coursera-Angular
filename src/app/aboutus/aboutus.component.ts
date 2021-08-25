import { Component, OnInit, Inject } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { LEADERS } from '../shared/leaders';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss'],
  host:{
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutusComponent implements OnInit {

  leaders : Leader[];
  leaderErrMsg: string;
  constructor(private leaderservice: LeaderService,
    @Inject('BaseURL') public baseURL:any) { }  


  ngOnInit(): void {
    this.leaderservice.getLeaders().subscribe(leaders => this.leaders = leaders, error => this.leaderErrMsg = error);
    console.log(this.leaders);
  }

}
