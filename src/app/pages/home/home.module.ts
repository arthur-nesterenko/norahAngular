import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { LogoModule } from '../logo/logo.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LogoModule
  ],
  providers: []
})
export class HomeModule { }
