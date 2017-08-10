import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { GunInterpService } from './gun-interp.service';
import { GunInterpComponent } from './gun-interp.component';

const routes: Routes = [
  {path: '', component: GunInterpComponent}
];

@NgModule({
  declarations: [
    GunInterpComponent
  ],
  imports: [
    CommonModule,
    HttpModule, 
    RouterModule.forChild(routes),
  ],
  providers: [GunInterpService]
})
export class GunInterpModule { }
