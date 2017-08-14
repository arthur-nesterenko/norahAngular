import { AfterViewInit, Component, Input, OnInit,Directive, ElementRef } from '@angular/core';
import {TerrainGenService} from '../terrain-gen.service';
import * as firebase from 'firebase';
import { BrowserModule } from '@angular/platform-browser';
import { Http,HttpModule,Headers,RequestOptions,Response  } from '@angular/http';
import {HeightMapSocketService} from '../HeightMapSocketService';
import {GlobalRef} from "../../../global-ref";
declare var $: any;
declare var ValidateInputsThenApply: any;


@Component({
  selector: 'app-caves',
  templateUrl: './caves.component.html',
  providers:[HeightMapSocketService]
})
export class CavesComponent implements AfterViewInit {

  terrains = [];
  userTerrains: any;
  receivedData: any[] = [];
  isGenerate: boolean = false;
  isOpen: boolean = true;
  showDeleteSelected = false;
  selectedImgs = [];
  @Input() generationType: string;

  constructor(public tergenService: TerrainGenService,private http:Http,
    private socket:HeightMapSocketService, private global: GlobalRef) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.tergenService.getTerrains(this.generationType)
        .then(data => this.terrains = data)
        .catch(error => console.log(error));
      let reciveData = this.tergenService.getReceivedData();
      if(reciveData){
        this.receivedData = reciveData;
      }
    }, 1500);
    this.socket.on('file-created', (msg)=>{
      var item;
      var imgs = document.getElementById("accordion").getElementsByTagName('img');
      var imgList = [];
      for(var i = 0; i < imgs.length; i++){
        if(imgs[i].src==msg.path){
          item = imgs[i];
          break;
       }
      }
      if(item){
        item.src=msg.path;
      }
    });
  }

  imageLoaded(event){
      event.target.style.visibility='visible';
  }
  errorImage(event){
     event.target.style.visibility='hidden';
     this.socket.emit("watch",{path:event.target.src});
  }

  nextTerGan() {
    this.tergenService.getTerrainsFromLibrary('mountains')
      .subscribe(items => {
        console.log(items);
        const anims = items.filter(file => file.type === 'mountains').map(file => {
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
      type: 'mountains',
      name: terrainName
    };
    this.tergenService.addTerrain(terrainObj);
  }

  deleteFromLibrary(terrain: string){
    this.tergenService.getTerrainsFromLibrary('mountains')
      .subscribe(items => {
        for(const item of items){
          if((item as any ).type === 'mountains' && (item as any).name === terrain.match(/%2F(.+)\?/)[1]){
            this.tergenService.removeTerrainsFromLibray((item as any).$key);
          }
        }
      });
  }

  openImage(src) {
  console.log('SRC'+src);
    ValidateInputsThenApply(src);

    // $('#modalClose').click(function (e) {
    //   $('#modalThree').css('display', 'none');
    //   //$( "#group" ).show();
    //   resetThree();
    // });
    // $('#modalThree').css('display', 'block');
    // //$( "#group" ).hide();
    // loader.load(src, function (texture) {
    //   init(texture);
    // }, function (xhr) {
    //   console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    // }, function (xhr) {
    //   console.log('An error happened');
    // });
  }

  clearCheckImages(){

   var images = document.getElementsByClassName('item');
    var srcList = [];
    var a;
    for(var i = 0; i < images.length; i++) {
      if(images[i].getElementsByTagName('input')[0] && images[i].getElementsByTagName('input')[0].type == 'checkbox' && images[i].getElementsByTagName('input')[0].checked){
           images[i].getElementsByTagName('input')[0].checked = false;
           let test = images[i].getElementsByClassName('fa-check-circle-o')as HTMLCollectionOf<HTMLElement>;
           test[0].style.display = test[0].style.display === 'none' ? '' : 'none';
           images[i].classList.toggle('active-img');
      }

    }


  }

  uploadImages(p_cross, minCount){
    var images = document.getElementById("gen2-images").getElementsByClassName('item');
    var srcList = [];
    var a;
    let selectedCount = 0;

    for(var i = 0; i < images.length; i++) {
      if(images[i].getElementsByTagName('input')[0] && images[i].getElementsByTagName('input')[0].type == 'checkbox' && images[i].getElementsByTagName('input')[0].checked){
        console.log("Select"+images[i].getElementsByTagName('img')[0].src);
        if(a){
          a = a+ ',';
        } else {
          a = '';
        }
        a = a +  images[i].getElementsByTagName('img')[0].src;
        selectedCount++;

      }

    }

    if(selectedCount < minCount){
      const wnd = this.global.nativeGlobal;
      const toastr = wnd.toastr;
      if(minCount === 1)
        toastr.error('Select atleast 1 heightmap for shuffle generate');
      else
        toastr.error('Select atleast 2 heightmaps for hybrid generate');
      return;
    }

    this.clearCheckImages();
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin' ,'*');
    headers.append('Access-Control-Allow-Headers',' Origin, Content-Type, X-Auth-Token');
    let options = new RequestOptions({ headers: headers });
    var date_t =  Date.now();
    var body = {image_src: a,imgUploader: '',date:date_t,pcross:p_cross,pop_size:'2',iter:'3',hmin:'0',hmax:'8',r:'1024',c:'1024',func_mut:'sin',func_cross:'plus',gaussian_c:'1.4'};
    if(a){
        this.http.post('https://absentiaterraingen.com/upload', body, options)
        .map((resp: Response) => resp['_body'])
        .subscribe(
            (data: string) => {
              /*
                Create a custom object which allow us generate new tabs
                Received data are saved in property which allow us display received images in the tabs
              */
              var values=[];
              const customObj = {
                receivedImages: data.split(',').map(function(imgPath){return "https://absentiaterraingen.com/"+ imgPath })
              };
              this.receivedData.push(customObj);
              this.tergenService.setReceivedData(this.receivedData);

              for(let i = 1; i <= this.receivedData.length; i++){
                $('#collapse' + i).collapse("hide");
              }
              setTimeout(() => {
                $('#collapse1').collapse("show");
              }, 500);
            }, //For Success Response
            err => { console.error(err); } //For Error Response
        );
    }
  }

  selectImg(event, tera) {
    const images = document.getElementsByClassName('item');
    //for (let i = 0; i < images.length; i++) {
      //if ( images[i].getElementsByTagName('input')[0] && images[i].getElementsByTagName('input')[0].checked) {
      if ( event.currentTarget.getElementsByTagName('input')[0] && event.currentTarget.getElementsByTagName('input')[0].checked) {
        const test = event.currentTarget.getElementsByClassName('fa-check-circle-o');
        test[0].style.display = test[0].style.display === 'none' ? '' : 'none';
        event.currentTarget.getElementsByTagName('input')[0].checked = true;
        //images[i].classList.toggle('active-img');
        event.currentTarget.classList.toggle('active-img');
      }
    var images2 = document.getElementById("gen2-images").getElementsByClassName('item');
    let selectedCount = 0;
    this.showDeleteSelected = false;
    for(var i = 0; i < images2.length; i++) {
      if(images2[i].getElementsByTagName('input')[0] && images2[i].getElementsByTagName('input')[0].type == 'checkbox' && images2[i].getElementsByTagName('input')[0].checked){
        this.showDeleteSelected = true;
        this.selectedImgs.push(tera);
      }
    }
    //}
  }

  deleteSelected() {
    this.tergenService.getTerrainsFromLibrary('mountains')
      .subscribe(items => {
        for(const item of items){
          for(const selected of this.selectedImgs){
            if((item as any ).type === 'mountains' && (item as any).name === selected.match(/%2F(.+)\?/)[1]){
              this.tergenService.removeTerrainsFromLibray((item as any).$key);
            }
          }
        }
        this.selectedImgs = [];
      });
  }

  addToLibraryFromGeneration(receivedImg){
    let recived = receivedImg.split('/');

    fetch(receivedImg)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        let objectURL = URL.createObjectURL(blob);
        let storageRef = firebase.storage().ref();
        let path = `/mountains/${recived[recived.length - 1]}`;
        let iRef = storageRef.child(path);
        iRef.put(blob).then((snapshot) => {
          const terrainObj = {
            type: 'mountains',
            name: recived[recived.length - 1]
          };
          this.tergenService.addTerrain(terrainObj);
        });
      });
  }
}
