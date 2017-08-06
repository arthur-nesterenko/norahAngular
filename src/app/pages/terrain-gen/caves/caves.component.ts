import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {TerrainGenService} from '../terrain-gen.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-caves',
  templateUrl: './caves.component.html'
})
export class CavesComponent implements AfterViewInit {
  
  terrains = [];
  userTerrains: any;
  isGenerate: boolean = false;
  isOpen: boolean = true;
  @Input() generationType: string;
  
  constructor(public tergenService: TerrainGenService) {
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.tergenService.getTerrains(this.generationType)
        .then(data => this.terrains = data)
        .catch(error => console.log(error));
    }, 1500);
  }
  
  nextTerGan() {
    this.tergenService.getTerrainsFromLibrary(this.generationType)
      .subscribe(items => {
        console.log(items);
        const anims = items.filter(file => file.type === this.generationType).map(file => {
          console.log(file.name);
          return firebase
            .storage()
            .ref(`${file.type}/`)
            .child(`${file.name}`)
            .getDownloadURL();
        });
        this.userTerrains = Promise.all(anims);
      });
    this.isGenerate = !this.isGenerate;
  }
  
  isOpenAccord() {
    this.isOpen = !this.isOpen;
  }
  
  /* Add terrain to db */
  addToLibrary(terrain: string) {
    console.log(terrain);
    const terrainName = terrain.match(/%2F(.+)\?/)[1];
    const terrainObj = {
      type: this.generationType,
      name: terrainName
    };
    this.tergenService.addTerrain(terrainObj);
  }
  
}
