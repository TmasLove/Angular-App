import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';



@Injectable()
export class AlcoholPullService {

  BASE_URL: string = environment.apiBase;
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
