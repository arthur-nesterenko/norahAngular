import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal/modal.module';

import { ContactUsComponent } from './contact-us.component';
import { LogoModule } from '../logo/logo.module';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: ContactUsComponent
    }]),
    ModalModule.forRoot(),
    LogoModule
  ],
  providers: []
})
export class ContactUsModule { }
