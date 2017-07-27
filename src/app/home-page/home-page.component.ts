import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {

  isLoggedOut: boolean = false;
  currentUser: any = {};


   constructor(
      private auth: AuthService,
      private routerThing: Router
    ) { }

   ngOnInit() {
     this.auth.checkLogin()
      .then((userFromDb) => {
        if (userFromDb) this.currentUser = userFromDb;
        else this.routerThing.navigate(['selections'])
      .catch((err) => {
      });

   });

 }
}
