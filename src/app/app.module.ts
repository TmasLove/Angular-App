import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { L_SEMANTIC_UI_MODULE } from 'angular2-semantic-ui';
import { LandingComponent } from './landing/landing.component';
import { ModalModule } from 'ng2-bootstrap/modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LandingComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    L_SEMANTIC_UI_MODULE,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
