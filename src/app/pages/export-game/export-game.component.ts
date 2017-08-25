import { Component } from '@angular/core';
import * as $ from 'jquery';
import { LibraryService } from './library.service';
import {
  GlobalRef
} from '../../global-ref';

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
   toastr:any;
  constructor(private library:LibraryService,private global: GlobalRef) {
    const wnd = this.global.nativeGlobal;
    this.toastr = wnd.toastr;


    library.isLoggedIn().subscribe((user)=>{

        if(user)
          { this.toastr.info("User logged in");
            this.charModels=library.getCharModels();
            this.terrainModels=library.getTerrainModels();
            this.gunModels=library.getGunModels();
          }
      else{
              this.toastr.error("You need to login..");
    }
    });
      }

  switchModelType(modelType:string){
console.log("switching")
    this.selectedModelType=modelType;
  }


	
	

}