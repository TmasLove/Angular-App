import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser: any = {};
  isLoggedOut: boolean = false;

  fullNameValue: string;
  emailValue: string;
  addressValue: string;
  usernameValue: string;
  passwordValue: string;

  signupErrorMessage: string;




   constructor(
      private auth: AuthService,
      private routerThing: Router
    ) { }


    ngOnInit() {
      this.auth.checkLogin()
      .then((userFromDb) => {
        this.routerThing.navigate(['/'])
      })
      .catch(() => {
        this.isLoggedOut = true;
      })

    }

   // LOG OUT BUTTON

   doLogout() {
      this.auth.logout()
      .then(() => {
        this.isLoggedOut = true;
        this.routerThing.navigate(['/'])
      })
    }

   toLogin(){
      this.routerThing.navigate(['/signin'])
    }

   // SIGN UP

   doSignUp(){
     console.log('SIGN UP IS WORKING')
        this.auth.signup(this.fullNameValue, this.emailValue, this.addressValue, this.usernameValue, this.passwordValue)
          .then((resultsFromApi) => {
            this.fullNameValue = "";
            this.emailValue = "";
            this.addressValue = "";
            this.usernameValue = "";
            this.passwordValue = "";
            this.signupErrorMessage = "";


           this.routerThing.navigate(['/'])
          })
          .catch((err) => {
            const parsedError = err.json();
            this.signupErrorMessage = parsedError.message
          });
    }


}
