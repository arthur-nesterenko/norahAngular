import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerrainGenComponent } from './terrain-gen.component';
import { TerrainGenService } from './terrain-gen.service';
import {MountainsComponent} from './mountains/mountains.component';
import { HillsComponent } from './hills/hills.component';
import { PlainsComponent } from './plains/plains.component';
import { IslandsComponent } from './islands/islands.component';
import { CavesComponent } from './caves/caves.component';


const routes: Routes = [
  {path: '', component: TerrainGenComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TerrainGenComponent,
    MountainsComponent,
    HillsComponent,
    PlainsComponent,
    IslandsComponent,
    CavesComponent
  ],
  exports: [RouterModule],
  entryComponents: [TerrainGenComponent],
  providers: [TerrainGenService]
})
export class TerrainGenModule {
}
