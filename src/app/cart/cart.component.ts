import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { SelectionsComponent } from '../selections/selections.component';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/toPromise';





@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {


// checkoutItems: any = [];
  bottles: any;
  user: any;

  constructor(private service: CartService) { }

  ngOnInit() {
    this.service.displayCart()
    .subscribe(res => {
      console.log(res);
      this.bottles = res;
    });
  }




}
