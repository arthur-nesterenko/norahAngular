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

  charModels:any
  constructor(private library:LibraryService) {

    this.charModels=library.getCharModels();
  }


	
	

}