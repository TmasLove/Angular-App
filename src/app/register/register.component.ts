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

  loginUsername: string;
  loginPassword: string;

  loginErrorMessage: string;


   constructor(
      private auth: AuthService,
      private routerThing: Router
    ) { }


    ngOnInit() {
      this.auth.checklogin()
      .then((userFromApi) => {
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
              console.log('this.fullNameValue')
              console.log('this.emailValue')
              console.log('this.addressValue')
              console.log('this.usernameValue')
              console.log('this.passwordValue')
              console.log('this.signupErrorMessage')

           this.routerThing.navigate(['/'])
          })
          .catch((err) => {
            const parsedError = err.json();
            this.signupErrorMessage = parsedError.message
          });
    }

   // LOG IN

   doLogin() {
      this.auth.login(this.loginUsername, this.loginPassword)
      .then((resultsFromApi) => {
        this.loginUsername = "";
        this.loginPassword = "";
        this.loginErrorMessage = "";

       this.isLoggedOut = false;

       this.routerThing.navigate(['/'])
      })
      // alert('login submitted');
      .catch((err) => {
        const parsedError = err.json();
        this.loginErrorMessage = parsedError.message
      });
    }



    closeModal() {
        document.getElementById('modal').style.display = "none";
    }

}
