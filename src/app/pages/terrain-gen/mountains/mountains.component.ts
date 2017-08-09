import { AfterViewInit, Component, Input, Renderer } from '@angular/core';
import * as firebase from 'firebase';
import { TerrainGenService } from '../terrain-gen.service';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule, Headers, RequestOptions, Response  } from '@angular/http';
import {Observable} from "rxjs/Observable";

declare var $: any;

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html'
})
export class MountainsComponent implements AfterViewInit {

  terrains = [];
  userTerrains: any;
  /* Received Data after clicking on button Upload */
  receivedData: any[] = [];
  isGenerate: boolean = false;
  isOpen: boolean = true;
  @Input() generationType: string;
  selectedImg: string[] = [];
  selected: boolean = false;

  constructor(
    public tergenService: TerrainGenService,
    private http: Http,
    private renderer: Renderer) {
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
      const anims =  items.filter(file => file.type === this.generationType).map(file => {
        //console.log(file.name);
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
    //console.log(terrain);
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
    headers.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token');
    let options = new RequestOptions({ headers: headers });
    var date_t =  Date.now();
    var body = {image_src: a,imgUploader: '',date:date_t};
    if(a){
      this.http.post('http://130.211.148.177:2000/upload', body, options)
        .map((resp: Response) => {
          console.log(resp);
        })
        .subscribe(
            (data) => {
              /*
                Create a custom object which allow us generate new tabs
                Received data are saved in property which allow us display received images in the tabs
              */
              const customObj = {
                receivedImages: [data]
              };
              this.receivedData.push(customObj);
            }, //For Success Response
            err => {console.error(err)} //For Error Response
        );
    }
  }

  selectImg(event, value) {
    /*console.log("Target - ", event.target);*/
    /*this.renderer.setElementClass(event.target, "active-img", true);*/
    this.selectedImg.push(value);
    console.log(this.selectedImg);
    this.selectedImg.forEach(img => {
      this.selected = img === value ? true : false;
    });
  }


}
