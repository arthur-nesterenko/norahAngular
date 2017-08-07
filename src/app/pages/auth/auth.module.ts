import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFireModule } from 'angularfire2';

import { AuthComponent } from './auth.component';
import { environment } from 'environments/environment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { DialogComponent, DialogService } from './dialog/dialog.component';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

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
