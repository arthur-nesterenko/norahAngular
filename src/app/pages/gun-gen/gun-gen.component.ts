import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import { GunInterpService } from './gun-gen.service';


@Component({
  selector: 'app-gun-gen',
  templateUrl: './gun-gen.component.html',
  styleUrls: ['./gun-gen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GunInterpComponent implements AfterViewInit {

  currentComponent: string = 'mountains';
  activeLink: string = 'mountains';
  isGenerate = false;
  isOpen = true;
  

  constructor(private terrainService: GunInterpService) {
  }

  ngAfterViewInit() {
    $('.expandt').on('click', function () {
      $(this).next().slideToggle(200);
      const $expand = $(this).find('>:first-child');

      if ($expand.text() === '▼') {
        $expand.text('►');
      } else {
        $expand.text('▼');
      }
    });
  }

  selectTerrain(terrainsType: string) {
	  alert(terrainsType);
    this.activeLink = terrainsType;
    this.currentComponent = terrainsType;
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

}
