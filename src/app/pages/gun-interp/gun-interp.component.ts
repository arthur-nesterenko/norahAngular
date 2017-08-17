import {
  Component,
  AfterViewInit,
} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {
  FirebaseApp
} from 'angularfire2/angularfire2';
import * as firebase from 'firebase';
import {
  GunInterpService
} from './gun-interp.service';

@Component({
  selector: 'app-gun-interp',
  templateUrl: './gun-interp.component.html',
  styleUrls: ['./gun-interp.component.scss'],

})
export class GunInterpComponent implements AfterViewInit {
  guns = [];
  libraryGuns: any;
  isGun: boolean = true;
  isGenerate: boolean = false;
  isTexture: boolean = false;
  showDeleteSelected = false;
  selectedImgs = [];
  generationType = 'Sniper';
  constructor(
    public gunInterpService: GunInterpService,
    private http: Http
  ) {}

  openTexture() {
    console.log('Texture');
    // if (this.isTexture) {
    //   this.isTexture = false;
    //   this.isGun = true;
    //   this.isGenerate = false;
    // } else {
    //   this.isTexture = true;
    //   this.isGun = false;
    //   this.isGenerate = false;
    // }
  }
  openGeneration() {

    if (this.isGenerate) {
      this.isTexture = false;
      this.isGun = true;
      this.isGenerate = false;
    } else {
      this.isTexture = false;
      this.isGun = false;
      this.isGenerate = true;
    }
    this.gunInterpService.getGunsFromLibrary(this.generationType)
    .subscribe(items => {
      const anims = items.filter(file => file.type === this.generationType).map(file => {
        return firebase
          .storage()
          .ref(`gun/${file.type}`)
          .child(`/${file.name.split(/\%2F/)[1]}`)
          .getDownloadURL()
      });
      this.libraryGuns = Promise.all(anims);
    });

  }


  setGunsType(type: string) {

    this.generationType = type;
    this.gunInterpService.getUser();
    setTimeout(() => {
      this.gunInterpService.getGuns('gun/'+this.generationType)
        .then(data => {this.guns = data})
        .catch(error => console.log(error));
    }, 1000);
  }

  addToLibrary(gun: string) {

    const gunName = gun.match(/%2F(.+)\?/)[1];
    const gunObj = {
      type: this.generationType,
      name: gunName
    };
    this.gunInterpService.addGun(gunObj);
  }
  addToGame(gun: string) {

      const gunName = gun.match(/%2F(.+)\?/)[1];
      const gunObj = {
        type: this.generationType,
        name: gunName,
        src: gun
      };
      this.gunInterpService.addGunToGame(gunObj);
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
  ngAfterViewInit() {
    this.gunInterpService.getUser();
    setTimeout(() => {
      this.gunInterpService.getGuns("gun/"+this.generationType)
        .then(data => {this.guns = data})
        .catch(error => console.log(error));
    }, 100);

  }

}
