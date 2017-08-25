import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {HttpModule, Http,Response,Headers,RequestOptions, Request, RequestMethod} from '@angular/http';
@Component({
  selector: 'app-sniper',
  templateUrl: './sniper.component.html',
  styleUrls: ['./sniper.component.css']
})
export class SniperComponent implements OnInit {
  gameDataForm: FormGroup;
data:any;
  constructor( private formBuilder: FormBuilder,private http:Http) { 
    this.gameDataForm = this.formBuilder.group({
      name: new FormControl('')
    });
  }

  ngOnInit() {
  }

  submit() {//  http://23.251.152.144/SniperBuilder/Builds/New

  //   let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    
  //  var body = 'username=myusername?password=mypassword';
  let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  headers.append('Access-Control-Allow-Origin' ,'*');
  headers.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token');
  let options = new RequestOptions({ headers: headers });
console.log(this.gameDataForm.value);

console.log(this.gameDataForm.controls['name'].value);
//body.set('name',this.gameDataForm.controls['name'].value);

let body = `name=${this.gameDataForm.controls['name'].value}`
// this.gameDataForm.value,
    this.http.post('https://requestb.in/13ymner1',body,options)
    .subscribe((result) => {
      console.log(result, 'result reached')
    }, (err) => {
      console.log(err, 'error reached');
    });
  }

}
