import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AngularFireAuth } from 'angularfire2';
import { User } from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { DialogService } from './dialog/dialog.component';


@Injectable()
export class AuthGuard implements CanActivate {
  user: User;
  constructor (private authService: AuthService,
               private dialogService: DialogService,
               private afAuth: AngularFireAuth) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.currentState.map(state => {
      if (!state) {
        this.dialogService.show();
      }
      return !!state;
    });
  }
}
