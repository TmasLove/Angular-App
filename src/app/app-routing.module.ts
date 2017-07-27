import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomePageComponent } from './home-page/home-page.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SelectionsComponent } from './selections/selections.component';
import { CartComponent } from './cart/cart.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';


const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'selections',
    component: SelectionsComponent
  },

  {
    path: 'cart',
    component: CartComponent
  },

  {
    path: 'order-complete',
    component: OrderCompleteComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
