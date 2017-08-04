import { Component, OnInit } from '@angular/core';
import { NouiFormatter } from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
declare var $:any;
@Component({
  selector: 'app-dna-code',
  templateUrl: './dna-code.component.html',
  styleUrls: ['./dna-code.component.css']
})
export class DnaCodeComponent implements OnInit {
 
  public someMin = 1;
  public someLimit = 50;
  someValue= [ 2, 10 ];
  someRange= [ 2, 10 ];
  someRange2config: any = {
  behaviour: 'drag',
  connect: true,
  margin: 1,
  limit: 5, // NOTE: overwritten by [limit]="10"
  range: {
    min: 0,
    max: 20
	  },
	  pips: {
	    mode: 'steps',
	    density: 5
	  }
	};

  someKeyboardConfig: any = {
  behaviour: 'drag',
  connect: true,
  start: [0, 5],
  keyboard: true,  // same as [keyboard]="true"
  step: 0.1,
  pageSteps: 10,  // number of page steps, defaults to 10
  range: {
    min: 0,
    max: 5
  },
  pips: {
    mode: 'count',
    density: 2,
    values: 6,
    stepped: true
  }
};
  constructor() { }

  ngOnInit() {
  	$(function() {
            setTimeout(function(){
               $(".expand").trigger('click')
            },500);
            $(".expand").on( "click", function() {
              $(this).next().slideToggle(200);
              var $expand = $(this).find(">:first-child");
           
              if($expand.text() == "▼") {
                $expand.text("►");
             } else {
                $expand.text("▼");
             }
           });
      });
  }

  onChange(value: any) {
    console.log('Value changed to', value);
  }

}
