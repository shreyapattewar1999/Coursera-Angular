import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  leaders : Leader[];
  constructor(private leaderservice: LeaderService) { }


  ngOnInit(): void {
    this.leaderservice.getLeaders().then(leaders => this.leaders = leaders);
    console.log(this.leaders);
  }

}
