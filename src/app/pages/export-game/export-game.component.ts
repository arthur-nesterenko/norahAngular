import { Component } from '@angular/core';
import * as $ from 'jquery';
import { LibraryService } from './library.service';


@Component({
  selector: 'export-game',
  templateUrl: './export-game.component.html',
  styleUrls: ['./export-game.component.scss'],
  providers:[LibraryService]
})
export class ExportGameComponent {

  charModels:any;
  terrainModels:any;
  gunModels:any;
  selectedModelType:string="charModel"
  constructor(private library:LibraryService) {

    library.isReady().subscribe((user)=>{
          this.charModels=library.getCharModels();
          this.terrainModels=library.getTerrainModels();
        this.gunModels=library.getGunModels();

    });
      }

  switchModelType(modelType:string){
console.log("switching")
    this.selectedModelType=modelType;
  }


	
	

}