import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { TerrainGenService } from './terrain-gen.service';


@Component({
  selector: 'app-terrain-gen',
  templateUrl: './terrain-gen.component.html',
  styleUrls: ['./terrain-gen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerrainGenComponent implements AfterViewInit {

  activeLink = 'mountains';
  terrains: string[] = [];
  isGenerate = false;
  isOpen = true;

  constructor(private terrainService: TerrainGenService) {
    this.selectTerrain('mountains');
  }

  ngAfterViewInit() {
    $('.expand').on('click', function () {
      $(this).next().slideToggle(200);
      const $expand = $(this).find('>:first-child');

      if ($expand.text() === '▼') {
        $expand.text('►');
      } else {
        $expand.text('▼');
      }
    });
  }

  selectTerrain(terrainsType: string = 'mountains') {
    this.activeLink = terrainsType;
    this.terrainService.getTerrains(terrainsType)
      .then(terrains => this.terrains = terrains);
  }
  addToLibrary(terrain: string) {
    this.terrainService.addTerrain(terrain);
  }

  openImage(src) {

    $('#modalClose').click(function (e) {
      $('#modalThree').css('display', 'none');
      //$( "#group" ).show();
      resetThree();
    });
    $('#modalThree').css('display', 'block');
    //$( "#group" ).hide();
    loader.load(src, function (texture) {
      init(texture);
    }, function (xhr) {
      console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, function (xhr) {
      console.log('An error happened');
    });
  }
  nextTerGan() {
    this.isGenerate = !this.isGenerate;
  }
  test() {
    this.isOpen = !this.isOpen;
  }

}
