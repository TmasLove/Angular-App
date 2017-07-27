import { Injectable } from '@angular/core';
import { SelectionsComponent } from '../selections/selections.component';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/toPromise';
import { environment } from "../../environments/environment"
import {Http} from "@angular/http";



@Injectable()
export class CartService {

  baseUrl: string = environment.apiBase

  constructor(
  private http: Http
  ) { }

  addToCart(id) {
    console.log('id--------',id);

    return this.http.post(
      this.baseUrl + '/api/liquor/addtocart/',
      { id: id},
      { withCredentials: true }
    )
    .toPromise()
    .then (result => result.json());

  }

  saveCart(id, cart) {
    return this.http.post(this.baseUrl + '/api/liqour/save-cart', cart, {withCredentials: true} )
    .map(res => res.json());
  }

  displayCart() {
    return this.http.get(
      this.baseUrl + '/api/liquor/display-cart',
      { withCredentials: true }
    )
    .map(res => res.json());

  }

  removeItem(item){

  }

  }
