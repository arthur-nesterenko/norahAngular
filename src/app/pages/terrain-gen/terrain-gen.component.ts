import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { GlobalRef } from '../../global-ref';
import { HeightMapSocketService } from './HeightMapSocketService';
import { TerrainGenService } from './terrain-gen.service';
import * as firebase from 'firebase';

declare const $: any;
declare const ValidateInputsThenApply: any;

@Component({
  selector: 'app-terrain-gen',
  templateUrl: './terrain-gen.component.html',
  styleUrls: ['./terrain-gen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerrainGenComponent implements AfterViewInit {

  activeLink = 'canyons';
  isGenerate = true;
  isOpen = true;
  terrains: any;
  userTerrains: any;
  /* Received Data after clicking on button Upload */
  receivedData: any[] = [];
  showDeleteSelected = false;
  selectedImgs = [];

  constructor(private terrainService: TerrainGenService,
              private socket: HeightMapSocketService,
              private global: GlobalRef,
              private http: Http) {
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
    this.selectTerrain(this.activeLink);
    const reciveData = this.terrainService.getReceivedData();
    if ( reciveData ) {
      this.receivedData = reciveData;
    }
    this.socket.on('file-created', (msg) => {
      let item;
      const imgs = document.getElementById('accordion').getElementsByTagName('img');
      const imgList = [];
      for ( let i = 0; i < imgs.length; i++ ) {
        if ( imgs[i].src === msg.path ) {
          item = imgs[i];
          break;
        }
      }
      if ( item ) {
        item.src = msg.path;
      }
    });
  }

  imageLoaded(event) {
    event.target.style.visibility = 'visible';
  }

  errorImage(event) {
    event.target.style.visibility = 'hidden';
    this.socket.emit('watch', { path: event.target.src });
  }

  nextTerGan() {
    this.terrainService.getTerrainsFromLibrary(this.activeLink)
      .subscribe(items => {
        //console.log(items);
        const anims = items.map(file => {
          console.log(file.name);
          return firebase
            .storage()
            .ref(`terrainImages/${file.type}/`)
            .child(`${file.name}`)
            .getDownloadURL();
        });
        this.userTerrains = Promise.all(anims);
      });
    // this.isGenerate = !this.isGenerate;
    if ( this.isGenerate==false ) {
      this.isGenerate = true;
    
  }
}
  generationButton() {
    this.terrainService.getTerrainsFromLibrary(this.activeLink)
      .subscribe(items => {
        //console.log(items);
        const anims = items.map(file => {
          console.log(file.name);
          return firebase
            .storage()
            .ref(`terrainImages/${file.type}/`)
            .child(`${file.name}`)
            .getDownloadURL();
        });
        this.userTerrains = Promise.all(anims);
      });
    this.isGenerate = !this.isGenerate;
    console.log("generation Button");
    console.log(this.isGenerate);
  }
  isOpenAccord() {
    this.isOpen = !this.isOpen;

  }

  deleteFromLibrary(terrain: string) {
    this.terrainService.getTerrainsFromLibrary('mountains')
      .subscribe(items => {
        for ( const item of items ) {
          if ( (item as any ).type === 'mountains' && (item as any).name === terrain.match(/%2F(.+)\?/)[1] ) {
            this.terrainService.removeTerrainsFromLibray((item as any).$key);
          }
        }
      });
  }

  addToLibraryFromGeneration(receivedImg) {
    const recived = receivedImg.split('/');

    fetch(receivedImg)
      .then(res => res.blob()) // Gets the response and returns it as a blob
      .then(blob => {
        const objectURL = URL.createObjectURL(blob);
        const storageRef = firebase.storage().ref();
        const path = `/mountains/${recived[recived.length - 1]}`;
        const iRef = storageRef.child(path);
        iRef.put(blob).then((snapshot) => {
          const terrainObj = {
            type: 'mountains',
            name: recived[recived.length - 1]
          };
          this.terrainService.addTerrain(terrainObj);
        });
      });
  }

  /* Add terrain to db */
  addToLibrary(terrain: any) {
    console.log(terrain);
    const terrainObj = {
      type: this.activeLink,
      name: terrain.name.split(`${this.activeLink}/`)[1],
      src: terrain.mediaLink
    };
    this.terrainService.addTerrain(terrainObj);
  }

  addToGame(terrain: any) {
    console.log(terrain);
    const terrainName = terrain.match(/%2F(.+)\?/)[1];
    const terrainObj = {
      type: this.activeLink,
      name: terrain.name.split(`${this.activeLink}/`)[1],
      src: terrain.mediaLink
    };
    this.terrainService.addTerrainToGame(terrainObj);
  }

  openImage(src) {
    console.log('SRC' + src);
    ValidateInputsThenApply(src);
  }

  clearCheckImages() {

    const images = document.getElementsByClassName('item');
    for ( let i = 0; i < images.length; i++ ) {
      if ( images[i].getElementsByTagName('input')[0] &&
        images[i].getElementsByTagName('input')[0].type === 'checkbox' &&
        images[i].getElementsByTagName('input')[0].checked ) {
        images[i].getElementsByTagName('input')[0].checked = false;
        const test = images[i].getElementsByClassName('fa-check-circle-o')as HTMLCollectionOf<HTMLElement>;
        test[0].style.display = test[0].style.display === 'none' ? '' : 'none';
        images[i].classList.toggle('active-img');
      }

    }

  }

  uploadImages(p_cross, minCount) {
    const images = document.getElementById('gen2-images').getElementsByClassName('item');
    const srcList = [];
    let a;
    let selectedCount = 0;
    for ( let i = 0; i < images.length; i++ ) {
      if ( images[i].getElementsByTagName('input')[0] &&
        images[i].getElementsByTagName('input')[0].type === 'checkbox' &&
        images[i].getElementsByTagName('input')[0].checked ) {
        console.log('Select' + images[i].getElementsByTagName('img')[0].src);
        if ( a ) {
          a = a + ',';
        } else {
          a = '';
        }
        a = a + images[i].getElementsByTagName('img')[0].src;
        selectedCount++;
      }

    }

    if ( selectedCount < minCount ) {
      const wnd = this.global.nativeGlobal;
      const toastr = wnd.toastr;
      if ( minCount === 1 ) {
        toastr.error('Select atleast 1 heightmap for shuffle generate');
      } else {
        toastr.error('Select atleast 2 heightmaps for hybrid generate');
      }
      return;
    }

    this.clearCheckImages();
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    const options = new RequestOptions({ headers: headers });
    const date_t = Date.now();
    const body = {
      image_src: a,
      imgUploader: '',
      date: date_t,
      pcross: p_cross,
      pop_size: '2',
      iter: '3',
      hmin: '0',
      hmax: '8',
      r: '1024',
      c: '1024',
      func_mut: 'sin',
      func_cross: 'plus',
      gaussian_c: '1.4'
    };
    if ( a ) {
      this.http.post('https://absentiaterraingen.com/upload', body, options)
        .map((resp: Response) => resp['_body'])
        .subscribe(
          (data: string) => {
            /*
              Create a custom object which allow us generate new tabs
              Received data are saved in property which allow us display received images in the tabs
            */
            const values = [];
            const customObj = {
              receivedImages: data.split(',').map(function (imgPath) {
                return 'https://absentiaterraingen.com/' + imgPath;
              })
            };

            this.receivedData.push(customObj);
            this.terrainService.setReceivedData(this.receivedData);
            for ( let i = 1; i <= this.receivedData.length; i++ ) {
              $('#collapse' + i).collapse('hide');
            }
            setTimeout(() => {

              $('#collapse1').collapse('show');
            }, 500);
          }, //For Success Response
          err => {
            console.error(err);
          } //For Error Response
        );
    }
  }


  selectImg(event, tera) {
    const images = document.getElementsByClassName('item');
    //for (let i = 0; i < images.length; i++) {
    //if ( images[i].getElementsByTagName('input')[0] && images[i].getElementsByTagName('input')[0].checked) {
    if ( event.currentTarget.getElementsByTagName('input')[0] && event.currentTarget.getElementsByTagName('input')[0].checked ) {
      const test = event.currentTarget.getElementsByClassName('fa-check-circle-o');
      test[0].style.display = test[0].style.display === 'none' ? '' : 'none';
      event.currentTarget.getElementsByTagName('input')[0].checked = true;
      //images[i].classList.toggle('active-img');
      event.currentTarget.classList.toggle('active-img');
    }

    const images2 = document.getElementById('gen2-images').getElementsByClassName('item');
    const selectedCount = 0;
    this.showDeleteSelected = false;
    for ( let i = 0; i < images2.length; i++ ) {
      if ( images2[i].getElementsByTagName('input')[0] &&
        images2[i].getElementsByTagName('input')[0].type === 'checkbox' &&
        images2[i].getElementsByTagName('input')[0].checked ) {
        this.showDeleteSelected = true;
        this.selectedImgs.push(tera);
      }
    }

  }

  deleteSelected() {
    this.terrainService.getTerrainsFromLibrary('mountains')
      .subscribe(items => {
        for ( const item of items ) {
          for ( const selected of this.selectedImgs ) {
            if ( (item as any ).type === 'mountains' && (item as any).name === selected.match(/%2F(.+)\?/)[1] ) {
              this.terrainService.removeTerrainsFromLibray((item as any).$key);
            }
          }
        }
        this.selectedImgs = [];
      });
  }
  selectTerrain(terrainsType: string) {
    this.activeLink = terrainsType;
    this.getTerrains(this.activeLink);
    this.nextTerGan();
  }
  getTerrains(type: string) {
    this.terrains = this.terrainService.getTerrains(type)
      .map(data => {
        const res = data.json().items.slice();
        res.shift();
        return res;
      });
  }
  // openImage(src) {
  //
  //   $('#modalClose').click(function (e) {
  //     $('#modalThree').css('display', 'none');
  //     //$( "#group" ).show();
  //     resetThree();
  //   });
  //   $('#modalThree').css('display', 'block');
  //   //$( "#group" ).hide();
  //   loader.load(src, function (texture) {
  //     init(texture);
  //   }, function (xhr) {
  //     console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  //   }, function (xhr) {
  //     console.log('An error happened');
  //   });
  // }

}
