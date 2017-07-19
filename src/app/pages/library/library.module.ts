import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbPaginationModule.forRoot(),
    RouterModule.forChild([{
      path: '',
      component: LibraryComponent
    }]),
  ],
  declarations: [LibraryComponent]
})
export class LibraryModule { }
