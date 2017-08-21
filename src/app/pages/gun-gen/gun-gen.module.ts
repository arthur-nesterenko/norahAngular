import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GunInterpComponent } from './gun-gen.component';
import { GunInterpService } from './gun-gen.service';
import {MountainsComponent} from './mountains/mountains.component';
import { HillsComponent } from './hills/hills.component';
import { PlainsComponent } from './plains/plains.component';
import { IslandsComponent } from './islands/islands.component';
import { CavesComponent } from './caves/caves.component';


const routes: Routes = [
  {path: '', component: GunInterpComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    GunInterpComponent,
    MountainsComponent,
    HillsComponent,
    PlainsComponent,
    IslandsComponent,
    CavesComponent
  ],
  exports: [RouterModule,GunInterpComponent,
    MountainsComponent,
    HillsComponent,
    PlainsComponent,
    IslandsComponent,
    CavesComponent],
  entryComponents: [GunInterpComponent],
  providers: [GunInterpService]
})
export class GunInterpModule {
}
