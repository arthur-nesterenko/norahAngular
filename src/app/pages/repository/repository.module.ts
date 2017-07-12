import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryComponent } from './repository.component';
import { RouterModule } from '@angular/router';
import { environment } from 'environments/environment';
import { AngularFireModule } from 'angularfire2/angularfire2';
import { RepositoryService } from './repository.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: RepositoryComponent
    }]),
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [RepositoryService],
  declarations: [RepositoryComponent]
})
export class RepositoryModule { }
