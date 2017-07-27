import { Component, OnInit }  from '@angular/core';
import { AlcoholPullService } from '../services/alcohol-pull.service';
import { Router }             from '@angular/router';
import { CartComponent }      from '../cart/cart.component';
import { CartService }        from '../services/cart.service';
import { AuthService }        from '../services/auth.service';


@Component({
  selector: 'app-selections',
  templateUrl: './selections.component.html',
  styleUrls: ['./selections.component.css'],
  providers: [CartComponent, CartService]
})
export class SelectionsComponent implements OnInit {

  bottles = [];
  beers = [];
  cart: any = [];
  user: any;


  myBottlesListError = '';
  myBeersListError = '';

  vodkaArray: any = [];
  whiskeyArray: any = [];
  rumArray: any = [];
  tequilaArray: any = [];

  ipaArray: any = [];
  lagerArray: any = [];


  constructor(
    private liq: AlcoholPullService,
    private router: Router,
    private cartComponent: CartComponent,
    private service: CartService,
    private authService: AuthService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.allBottles();
    this.allBeers();
    this.authService.checkLogin()
    .then(result => {
      if (result){
        this.user=result;
        console.log(result);
      } else {
        this.router.navigate(['login']);
      }
    });

  }

  allBottles() {
    this.liq.getBottles()
      .subscribe((myBottlesList) => {
        this.bottles = myBottlesList;

        this.categorizeBottles();
      },
      () => {
        this.myBottlesListError = 'sorry ninja, no bottles';
      }
      );
  }

  categorizeBottles (){

   this.bottles.forEach((oneBottle) => {
     if (oneBottle.category === 'Vodka')   { this.vodkaArray.push(oneBottle)};
     if (oneBottle.category === 'Rum')     { this.rumArray.push(oneBottle)};
     if (oneBottle.category === 'Whiskey') { this.whiskeyArray.push(oneBottle)};
     if (oneBottle.category === 'Tequila') { this.tequilaArray.push(oneBottle)};
   });
  }

allBeers(){
  this.liq.getBeers()
    .subscribe((myBeerList) => {
      this.beers = myBeerList;
      this.categorizeBeers();

    },
    () => {
      this.myBeersListError = 'sorry ninja, no beers';
    }
    )
}

categorizeBeers() {
  this.beers.forEach((oneBeer) => {
    if (oneBeer.category === 'IPA')   { this.ipaArray.push(oneBeer)};
    if (oneBeer.category === 'Lager') { this.lagerArray.push(oneBeer)};
  });
}

addToCart (bottle) {
  this.cartService.addToCart(bottle)
    .then((user) => {
      console.log(user);
      console.log("It worked")
    })

}

checkOut() {
  this.router.navigate(['cart']);
}


}
