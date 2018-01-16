import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsername: string;
  loginPassword: string;
  isLoggedOut: boolean = false;

  loginErrorMessage: string;
  errorMessage: string;


  constructor(
    private auth: AuthService,
    private routerThing: Router

  ) { }

  ngOnInit() {
  }

  // LOG IN

  doLogin() {
    console.log("Starting");
     this.auth.login(this.loginUsername, this.loginPassword)
     .then((resultsFromApi) => {
       console.log("Sucess");
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
       console.log("Failed :" + parsedError);
     });
   }

   // LOG OUT BUTTON

   doLogout() {
      this.auth.logout()
      .then(() => {
        this.isLoggedOut = true;
        this.routerThing.navigate(['/'])
      })
    }




}
