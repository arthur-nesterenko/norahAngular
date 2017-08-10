import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {TerrainGenService} from '../terrain-gen.service';
import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { Http,HttpModule,Headers,RequestOptions  } from '@angular/http';
declare var $: any;

@Component({
  selector: 'app-hills',
  templateUrl: './hills.component.html'
})
export class HillsComponent implements AfterViewInit {

  terrains = [];
  userTerrains: any;
  isGenerate: boolean = false;
  isOpen: boolean = true;
  @Input() generationType: string;

  constructor(public tergenService: TerrainGenService,private http:Http) {
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

  openImage(src) {
  console.log('SRC'+src);
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

  uploadImages(){
    console.log("Upload Images");
    var images = document.getElementsByClassName('item');
    var srcList = [];
    var a;
    for(var i = 0; i < images.length; i++) {
      if( images[i].getElementsByTagName('input')[0].checked){
        if(a){
          a = a+ ',';
        } else {
          a = '';
        }
        a = a +  images[i].getElementsByTagName('img')[0].src;
      }

    }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin' ,'*');
    headers.append('Access-Control-Allow-Headers',' Origin, Content-Type, X-Auth-Token');
    let options = new RequestOptions({ headers: headers });
    var date_t =  Date.now();
    var body = {image_src: a,imgUploader: '',date:date_t,pcross:'1',pop_size:'2',iter:'3',hmin:'0',hmax:'8',r:'1024',c:'1024',func_mut:'sin',func_cross:'plus',gaussian_c:'1.4'};
    if(a){
       this.http.post('https://absentiaterraingen.com/upload', body,options)
                .subscribe(
                    () => {alert("Success")}, //For Success Response
                    err => {console.error(err)} //For Error Response
                );
    }
  }

}
