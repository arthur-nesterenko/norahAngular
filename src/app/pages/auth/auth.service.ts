import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { User } from 'firebase/app';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import FacebookAuthProvider = firebase.auth.FacebookAuthProvider;
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import TwitterAuthProvider = firebase.auth.TwitterAuthProvider;

@Injectable()
export class AuthService {

  currentUser: User;
  currentState: Observable<{}>;
  error: EventEmitter<string> = new EventEmitter();

  constructor (private afAuth: AngularFireAuth, private router: Router) {
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(value => {
      this.currentUser = firebase.auth().currentUser;
    // });
    this.currentState = afAuth.map((state) => {
      this.currentUser = state !== null ? state.auth : null;
      return state;
    });
  }

  login(auth: {email: string, password: string}): void {
    // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(value => {
      firebase.auth().signInWithEmailAndPassword(auth.email, auth.password)
        .then(() => location.reload());
    // });
  }
  signWithCredentials(auth): void {
    firebase.auth().createUserWithEmailAndPassword(auth.email, auth.password)
      .then(() => location.reload())
      .catch((error) => this.error.emit(error.message));
  }
  loginWithGoogle(): void {
    const provider = new GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  loginWithFacebook(): void {
    const provider = new FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  loginWithTwitter(): void {
    const provider = new TwitterAuthProvider();
    firebase.auth().signInWithRedirect(provider);
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
