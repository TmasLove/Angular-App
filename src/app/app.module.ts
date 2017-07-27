import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service';
import { AlcoholPullService } from './services/alcohol-pull.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingComponent } from './landing/landing.component';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SelectionsComponent } from './selections/selections.component';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import { CartComponent } from './cart/cart.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';





@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,
    SelectionsComponent,
    CartComponent,
    OrderCompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    BootstrapModalModule,
    AccordionModule,
  ],
  providers: [
    AuthService,
    AlcoholPullService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
