import { Component, OnInit } from '@angular/core';
import { AlcoholPullService } from '../services/alcohol-pull.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css']
})
export class SelectionsComponent implements OnInit {

bottles = [];
myBottlesListError = '';

  constructor(
    private liq: AlcoholPullService,
    private router: Router
  ) { }

  ngOnInit() {
    this.allBottles();
  }

allBottles(){
  this.liq.getBottles()
  .subscribe((myBottlesList) => {
    this.bottles = myBottlesList;

  },
  () => {
    this.myBottlesListError ='sorry ninja';
  }
)
}

}
