import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'environments/environment';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthGuard } from './auth-guard.service';

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { DialogComponent, DialogService } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AuthComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService,
    AuthGuard,
    DialogService
  ],
  exports: [
    AuthComponent
  ],
  entryComponents: [DialogComponent, AuthComponent]
})
export class AuthModule { }
