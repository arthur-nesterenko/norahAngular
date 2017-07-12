import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { AngularFireAuth, AuthMethods, AuthProviders } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { User } from 'firebase/app';
import { FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  currentUser: User;
  currentState;

  constructor (private afAuth: AngularFireAuth, private router: Router){
    this.currentState = afAuth.map((state: FirebaseAuthState) => {
      this.currentUser = state !== null ? state.auth : null;
      return state;
    })
  }

  login(email, password): void {
    this.afAuth.login({email, password});
  }
  signWithCredentials(email, password): void {
    this.afAuth.createUser({email, password});
  }
  loginWithGoogle(): void {
    this.afAuth.login({
      method: AuthMethods.Redirect,
      provider: AuthProviders.Google
    });
  }
  loginWithFacebook(): void {
    this.afAuth.login({
      method: AuthMethods.Redirect,
      provider: AuthProviders.Facebook
    });
  }
  loginWithTwitter(): void {
    this.afAuth.login({
      method: AuthMethods.Redirect,
      provider: AuthProviders.Twitter
    });
  }
  logout() {
    this.afAuth.logout().then(() => this.router.navigate(['/']));
  }
  get authenticated(): boolean {
    return this.currentUser !== null;
  }


}
