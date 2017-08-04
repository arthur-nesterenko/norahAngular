import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoRiggerComponent } from './auto-rigger.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: AutoRiggerComponent
    }]),
  ],
  declarations: [AutoRiggerComponent]
})
export class AutoRiggerModule { }
