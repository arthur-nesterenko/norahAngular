import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from 'firebase/app';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  user: User;
  authForm: FormGroup;
  providers = ['Google', 'Facebook', 'Twitter'];
  state = 'login';
  @Input() showModal: Observable<boolean>;
  @ViewChild('authModal') public authModal: ModalDirective;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let path = event.url;

      }
    });
    this.authForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
    this.authService.currentState.subscribe(state => {
      this.user = state !== null ? state.auth : null;
    });
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

