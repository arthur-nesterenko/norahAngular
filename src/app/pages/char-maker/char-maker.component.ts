import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder,ReactiveFormsModule,FormGroup} from '@angular/forms';
import { Http,Headers} from '@angular/http';
import {Observable,Subscription} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NouiFormatter } from 'ng2-nouislider';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
declare var $:any;
//var express = require('express'); 
@Component({
  selector: 'app-char-maker',
  templateUrl: './char-maker.component.html',
  styleUrls: ['./char-maker.component.css']
})
export class CharMakerComponent implements OnInit {
  public hideFooter=false;
  public someMin = 1;
  public someLimit = 50;
  public inputRes:any;
  public outputRes:any;
  public sanitizedInput:any;
  public sanitizedOutput:any;
  public inputBaseParam:any;
  public inputHeight:any;
  public inputWeight:any;
  public inputAsian:any;
  public inputAfrican:any;
  public inputCaucasian:any;
  public inputSex:any;
  public outputBaseParam:any;
  public outputHeight:any;
  public outputWeight:any;
  public outputAsian:any;
  public outputAfrican:any;
  public outputCaucasian:any;
  public outputSex:any;
  public inputUrl = "assets/data/input.json";
  public OutputUrl = "assets/data/output.json";
  constructor(
    private _http: Http,
    private sanitizer: DomSanitizer
  )
  {
    // this.getInput();
    // this.getOutput();
  }
  
  
  public BaseParams: number[] = [0, 1];
  public Height: number[] = [0, 1];
  public Weight: number[] = [0, 1];
  public Asian: number[] = [0, 1];
  public African: number[] = [0, 1];
  public Caucasian: number[] = [0, 1];
  public Sex: number[] = [0, 1];
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
  start: [0, 3],
  keyboard: true,  // same as [keyboard]="true"
  step: 0.1,
  pageSteps: 10,  // number of page steps, defaults to 10
  range: {
    min: 0.0,
    max: 1.0
  },
  pips: {
    mode: 'count',
    density: 1,
    values: 1,
    stepped: true
  }
};
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

//  getInput(){
//          return this._http.get(this.inputUrl)
//            .map(res => res.json())
//            .catch(this.errorHandler)
//            .subscribe(
//             data => {
//               this.inputRes = data;
//               this.inputBaseParam = this.inputRes[0].Input.BaseParam;
//               this.inputHeight = this.inputRes[0].Input.Height;
//               this.inputWeight = this.inputRes[0].Input.Weight;
//               this.inputAsian = this.inputRes[0].Input.Asian;
//               this.inputAfrican = this.inputRes[0].Input.African;
//               this.inputCaucasian = this.inputRes[0].Input.Caucasian;
//               this.inputSex = this.inputRes[0].Input.Sex;
//             },
//             err => {
//                 console.log(err);
//             })
//      }

// getOutput(){
//          return this._http.get(this.OutputUrl)
//            .map(res => res.json())
//            .catch(this.errorHandler)
//            .subscribe(
//             data => {
//               this.outputRes = data; this.outputRes = data;
//               this.outputBaseParam = this.outputRes[0].Output.BaseParam;
//               this.outputHeight = this.outputRes[0].Output.Height;
//               this.outputWeight = this.outputRes[0].Output.Weight;
//               this.outputAsian = this.outputRes[0].Output.Asian;
//               this.outputAfrican = this.outputRes[0].Output.African;
//               this.outputCaucasian = this.outputRes[0].Output.Caucasian;
//               this.outputSex = this.outputRes[0].Output.Sex;
//             },
//             err => {
//                 console.log(err);
//             })
//      }

  saveBaseParamRange(slider,value) {
    console.log('Value of slider ' + slider + ' changed to', value);

  }

  saveRanges(saveRange:NgForm){
    this.inputRes = {
        "Input":{
        BaseParam: this.BaseParams[0],
        Height: this.Height[0],
        Weight: this.Weight[0],
        Asian: this.Asian[0],
        African: this.African[0],
        Sex: this.Sex[0]
      }
    }

this.outputRes = {
    "Output":
        {
        BaseParam: this.BaseParams[1],
        Height: this.Height[1],
        Weight: this.Weight[1],
        Asian: this.Asian[1],
        African: this.African[1],
        Caucasian: this.Caucasian[1],
        Sex: this.Sex[1]
        }
  }

  const inputjson = JSON.stringify(this.inputRes);
  const outputjson = JSON.stringify(this.outputRes);
  var blobinput = new Blob([inputjson], {type: "application/json"});
  var bloboutput = new Blob([outputjson], {type: "application/json"});
  
  let form: FormData = new FormData();
  form.append("input",blobinput, "input.json");
  form.append("output",bloboutput, "output.json");
  let headers = new Headers({ 'Content-Type': 'application/json' });
  var request = new XMLHttpRequest();
  request.open(
              "POST",
              "http://192.168.1.114:3000/users/abc"
          );
  request.send(form);

  }

   errorHandler(error: Response){
    console.error(error);
    return Observable.throw(error || "Server error");

  }

}
