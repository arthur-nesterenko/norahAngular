import { Injectable, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DialogService } from './dialog/dialog.component';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authService: AuthService, private dialogService: DialogService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let url: string = state.url;

    if (!this.authService.authenticated) {
      return this.dialogService.show()
    }
    // return
  }
}
