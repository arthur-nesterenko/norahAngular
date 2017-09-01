import { Directive,ElementRef,  Input,OnChanges,OnInit } from '@angular/core';

@Directive({
  selector: '[appgunimg]'
})
export class GunGenImgDirective implements OnChanges,OnInit {

  @Input() gunimg:any;
  constructor(private el:ElementRef) {


    console.log("Directive created");
   }

   ngOnInit(){
      console.log("Directive init");
      

   }

  ngOnChanges(){


    const inputjson = JSON.stringify(this.gunimg);
    
    var blobinput = new Blob([inputjson], {type: "application/json"});
    
    let form: FormData = new FormData();
    form.append("inputValues",blobinput, "input.json");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    var request = new XMLHttpRequest();
    request.open(
                "POST",
                "http://35.197.30.93:8000/upload"
            );
    request.send(form);
    request.onreadystatechange=(e)=>{

          console.log(e);


    };
  
    
  
  }
}
