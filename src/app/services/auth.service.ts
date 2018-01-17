import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthService {

 constructor(
    private httpThing: Http
  ) {
    // console.log(environment);

  }

 // POST signup
  // an argument for each 'req.body' in the API route
  signup(theFullName, theEmail, theAddress, theUsername, thePassword  ) {
    return this.httpThing
      .post(
        environment.apiBase + '/api/signup',
        // form body information to send to backend (req.body)
        {
          signupFullName: theFullName,
          signupEmail: theEmail,
          signupAddress: theAddress,
          signupUsername: theUsername,
          signupPassword: thePassword
        },
          { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())
  }

// -----------------------

 // POST login
  login(theUsername, thePassword) {
    console.log("Service");
    return this.httpThing
      .post(
        environment.apiBase + '/api/login',
        {
          username: theUsername,
          password: thePassword
        },
        { withCredentials: true }
      )
      .toPromise()
      .then((res) => {
        console.log(res.json());
        return res.json();
      })
  }

//------------------------

 // POST logout
  logout() {

    return this.httpThing
      .post(
        environment.apiBase + '/api/logout',
        {},
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json());
  }

//------------------------

 // GET checklogin

  checkLogin() {
        return this.httpThing
          .get(
            environment.apiBase + '/api/checklogin',

            // Send the cookies across domains
            { withCredentials: true }
          )

          // Convert from observable to promise
          .toPromise()

          // Parse the JSON
          .then(res => res.json());
    } // close checklogin()
}
