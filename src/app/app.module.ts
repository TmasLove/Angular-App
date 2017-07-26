import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service';
import { AlcoholPullService } from './services/alcohol-pull.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandingComponent } from './landing/landing.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { RegisterComponent } from './register/register.component';
import { SelectionsComponent } from './selections/selections.component';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingComponent,
    RegisterComponent,
    SelectionsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot(),
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
