import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleTransferComponent } from './style-transfer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: StyleTransferComponent
    }])
  ],
  declarations: [StyleTransferComponent]
})
export class StyleTransferModule { }
