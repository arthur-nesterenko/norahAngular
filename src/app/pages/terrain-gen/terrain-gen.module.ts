import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerrainGenComponent } from './terrain-gen.component';
import { TerrainGenService } from './terrain-gen.service';

const routes: Routes = [
  {path: '', component: TerrainGenComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TerrainGenComponent
  ],
  exports: [RouterModule],
  entryComponents: [TerrainGenComponent],
  providers: [TerrainGenService]
})
export class TerrainGenModule {
}
