import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  declarations: [
    HomeComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: []
})
export class HomeModule { }
