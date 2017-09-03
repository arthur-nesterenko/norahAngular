import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotionEditorComponent } from './motion-editor.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: MotionEditorComponent
    }])
  ],
  declarations: [MotionEditorComponent]
})
export class MotionEditorModule { }
