import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) { };

  signup(name: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(name, password).then(() => {
      this.router.navigate(['./signin']);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  signin(name: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(name, password).then((respons) => {
      this.router.navigate(['./']);
      firebase.auth().currentUser.getIdToken().then((token) => {
        this.token = token;
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then((token) => {
      this.token = token;
    });

    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
