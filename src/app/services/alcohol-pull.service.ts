import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AlcoholPullService {

  BASE_URL: string = 'http://localhost:3000';
  constructor( private http: Http ) { }

  getBottles(){
    return this.http.get(`${this.BASE_URL}/api/liquor/bottles`)
    .map((res) => res.json());
  }

  getBeers(){
    return this.http.get(`${this.BASE_URL}/api/liquor/beers`)
    .map((res) => res.json());
  }

}
