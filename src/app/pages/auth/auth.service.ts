import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthState } from 'angularfire2';
import {
  AngularFireAuth, AuthConfiguration, AuthMethods, AuthProviders,
  EmailPasswordCredentials
} from 'angularfire2/auth';
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
    this.currentState = afAuth.map((state: FirebaseAuthState) => {
      this.currentUser = state !== null ? state.auth : null;
      return state;
    });
  }

  login(auth: EmailPasswordCredentials): void {
    const loginConfig: AuthConfiguration = {
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    };
    this.afAuth.login({email: auth.email, password: auth.password}, loginConfig).then(
      () => location.reload()
    );
  }
  signWithCredentials(auth): void {
    this.afAuth.createUser({email: auth.email, password: auth.password});
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
    this.afAuth.logout().then(() => {
      this.router.navigate(['/']);
      location.reload();
    });
  }
  get authenticated(): boolean {
    return this.currentUser !== null;
  }


}
