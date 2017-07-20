import { Component, Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html'
})
export class DialogComponent   {
  authForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.authForm = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  public title: string;
  public message: string;
  public state: string;
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
      this.authService.login({email: this.email, password: this.password}) :
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

@Injectable()
export class DialogService {
  constructor(private modalService: NgbModal) {}

  public show() {
    const modalRef = this.modalService.open(DialogComponent);
    return modalRef.result;
  }
}
