import {Component, Input, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TerrainGenService } from '../terrain-gen.service';
declare var $: any;

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.scss']
})
export class MountainsComponent implements OnInit {

  terrains = [];
  isGenerate: boolean = false;
  isOpen: boolean = true;
  @Input() generationType: string;

  constructor(private tergenService: TerrainGenService) { }

  ngOnInit() {
    this.tergenService.getTerrains(this.generationType)
      .then(data => this.terrains = data)
      .catch(error => console.log(error));
  }

  nextTerGan() {
    this.isGenerate = !this.isGenerate;
    return false;
  }

  isOpenAccord() {
    this.isOpen = !this.isOpen;
  }

  /* Add terrain to db */
  addToLibrary(terrain: string) {
    console.log(terrain.match('%(.*)\?'));
    const pos = terrain.indexOf('F');
    console.log(terrain.split('F')[1]);
    console.log(terrain.substr(pos, ));
    /*const terrainName = '';
    const terrainObj = {
      type: this.generationType,
      name: terrainName
    }
    this.tergenService.addTerrain(terrainObj);*/
  }

}
