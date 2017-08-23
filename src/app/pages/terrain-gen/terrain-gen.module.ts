import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerrainGenComponent } from './terrain-gen.component';
import { TerrainGenService } from './terrain-gen.service';
import { HttpModule } from '@angular/http';
import { HeightMapSocketService } from './HeightMapSocketService';


const routes: Routes = [
  {path: '', component: TerrainGenComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TerrainGenComponent,
  ],
  exports: [
    RouterModule,
    TerrainGenComponent,
  ],
  entryComponents: [TerrainGenComponent],
  providers: [TerrainGenService, HeightMapSocketService]
})
export class TerrainGenModule {
}
