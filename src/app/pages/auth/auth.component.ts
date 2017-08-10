import { Component, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'firebase/app';
import { ModalDirective } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  user: User;
  authForm: FormGroup;
  providers = ['Facebook', 'Twitter', 'Google'];
  state = 'login';
  @Input() showModal: Observable<boolean>;
  @ViewChild('authModal') public authModal: ModalDirective;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) {
    this.authForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.authService.currentState.subscribe((state: User) => {
      this.user = state !== null ? state : null;
    });
  }
  get email(): string {
    return this.authForm.value.email;
  }
  get password(): string {
    return this.authForm.value.password;
  }
  switchForm(state): void {
    this.state = state;
  }
  signWithCredentials() {
    this.state === 'login' ?
      this.authService.login({email: this.email, password: this.password}, ) :
      this.authService.signWithCredentials({email: this.email, password: this.password});
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

