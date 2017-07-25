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



   constructor(
      private auth: AuthService,
      private routerThing: Router
    ) { }

   ngOnInit() {


   }





    closeModal() {
        document.getElementById('modal').style.display = "none";
    }

}
