import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthState } from 'angularfire2';
import {
  AngularFireAuth,
  AuthConfiguration,
  AuthMethods,
  AuthProviders,
  EmailPasswordCredentials
} from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'firebase/app';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  currentUser: User;
  currentState: Observable<FirebaseAuthState>;

  constructor (private afAuth: AngularFireAuth, private router: Router) {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(value => {
      this.currentUser = firebase.auth().currentUser;
    });
    this.currentState = afAuth.map((state: FirebaseAuthState) => {
      this.currentUser = state !== null ? state.auth : null;
      return state;
    });
  }

  login(auth: {email: string, password: string}): void {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(value => {
      firebase.auth().signInWithEmailAndPassword(auth.email, auth.password).then(
        () => location.reload()
      );
    });
  }
  signWithCredentials(auth): void {
    firebase.auth().createUserWithEmailAndPassword(auth.email, auth.password);
  }
  loginWithGoogle(): void {
    firebase.auth().signInWithRedirect({providerId: 'Google'});
  }
  loginWithFacebook(): void {
    firebase.auth().signInWithRedirect({ providerId: 'Facebook' });
  }
  loginWithTwitter(): void {
    firebase.auth().signInWithRedirect({ providerId: 'Twitter' });
  }
  logout() {
    firebase.auth().signOut().then(
      () => location.reload()
    );
  }
  get authenticated(): boolean {
    return this.currentUser !== null;
  }


}
