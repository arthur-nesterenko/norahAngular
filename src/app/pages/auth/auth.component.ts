import { Component } from '@angular/core';
import { User } from 'firebase/app';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  user: User;
  authForm: FormGroup;
  providers = ['Google', 'Facebook', 'Twitter'];
  state: string = 'login';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {

    this.authForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.authService.currentState.subscribe(state => this.user = state !== null ? state.auth : null);
  }
  get email(): string {
    return this.authForm.value.email;
  }
  get password(): string {
    return this.authForm.value.password;
  }
  switchForm(): void {
    this.state === 'login' ? this.state = 'registration' : this.state = 'login';
  }
  signWithCredentials() {
    this.state === 'login' ?
      this.authService.login(this.email, this.password) :
      this.authService.signWithCredentials(this.email, this.password);
  }
  loginWithProvider(provider: string): void {
    switch (provider) {
      case 'Google':
        this.authService.loginWithGoogle();
        break;
      case 'Facebook':
        this.authService.loginWithFacebook();
        break;
      case 'Twitter':
        this.authService.loginWithTwitter();
    }
  }
  logout() {
    this.authService.logout();
  }
}
