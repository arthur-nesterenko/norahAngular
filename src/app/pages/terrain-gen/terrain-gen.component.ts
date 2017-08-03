import {Component, OnInit, ViewEncapsulation} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-terrain-gen',
  templateUrl: './terrain-gen.component.html',
  styleUrls: ['./terrain-gen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerrainGenComponent implements OnInit {

  currentComponent: string = 'mountains';
  activeLink: string = 'mountains';

  constructor() { }

  ngOnInit() {
    $('.expand').on( 'click', function() {
      $(this).next().slideToggle(200);
      const $expand = $(this).find('>:first-child');

      if ($expand.text() === '▼') {
        $expand.text('►');
      } else {
        $expand.text('▼');
      }
    });
  }

  loadComponent(componentName: string) {
    this.currentComponent = componentName;
    this.activeLink = componentName;
  }

}
