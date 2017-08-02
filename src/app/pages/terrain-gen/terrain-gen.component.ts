import {Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-terrain-gen',
  templateUrl: './terrain-gen.component.html',
  styleUrls: ['./terrain-gen.component.scss']
})
export class TerrainGenComponent implements OnInit {

  blending: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  isGenerate = false;

  constructor() { }

  ngOnInit() {
    $('.expand').on( 'click', function() {
      $(this).next().slideToggle(200);
      const $expand = $(this).find('>:first-child');

      if($expand.text() === '▼') {
        $expand.text('►');
      } else {
        $expand.text('▼');
      }
    });
  }

  nextTerGan() {
    this.isGenerate = !this.isGenerate;
    return false;
  }

}
