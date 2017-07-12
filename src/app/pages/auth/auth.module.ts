import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AngularFireModule } from 'angularfire2';

import { AuthComponent } from './auth.component';
import { environment } from 'environments/environment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
