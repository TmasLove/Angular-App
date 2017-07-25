import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class AuthService {

 constructor(
    private httpThing: Http
  ) {


  }

 // POST signup
  // an argument for each 'req.body' in the API route
  signup(theFullName, theEmail, theAddress, theUsername, thePassword  ) {
    return this.httpThing
      .post(
        'http://localhost:3000/api/signup',
        // form body information to send to backend (req.body)
        {
          fullName: theFullName,
          email: theEmail,
          address: theAddress,
          username: theUsername,
          encryptedPassword: thePassword
        },
          { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())
  }

// -----------------------

 // POST login
  login(theUsername, thePassword) {
    return this.httpThing
      .post(
        'http://localhost:3000/api/login',
        {
          username: theUsername,
          password: thePassword
        },
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())
  }

//------------------------

 // POST logout
  logout() {
    return this.httpThing
      .post(
        'http://localhost:3000/api/logout',
        {},
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json());
  }

//------------------------

 // GET checklogin
  checklogin() {
    return this.httpThing
      .get(
        'http://localhost:3000/api/checklogin',
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json());
  }

}