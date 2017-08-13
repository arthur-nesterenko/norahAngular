import {
  Component,
  AfterViewInit
} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
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
  libraryGuns = [];
  isGun: boolean = true;
  isGenerate: boolean = false;
  isTexture: boolean = false;
  generationType = 'gun/Sniper';
  constructor(
    public gunInterpService: GunInterpService,
    private http: Http
  ) {}
  
  openTexture() {
    if (this.isTexture) {
      this.isTexture = false;
      this.isGun = true;
      this.isGenerate = false;
    } else {
      this.isTexture = true;
      this.isGun = false;
      this.isGenerate = false;
    }
  }
  openGeneration() {
    
    setTimeout(() => {
      this.gunInterpService.getGuns(this.generationType)
        .then(data => {this.libraryGuns = data, console.log(data, this.libraryGuns);})
        .catch(error => console.log(error));
    }, 1500);
    if (this.isGenerate) {
      this.isTexture = false;
      this.isGun = true;
      this.isGenerate = false;
    } else {
      this.isTexture = false;
      this.isGun = false;
      this.isGenerate = true;
    }
  }
  
  setGunsType(type: string) {
    console.log(type);
  }

  addToLibrary(gun: string) {
    console.log(gun);
    const gunName = gun.match(/%2F(.+)\?/)[1];
    const gunObj = {
      type: this.generationType,
      name: gunName
    };
    this.gunInterpService.addGun(gunObj);
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
  ngAfterViewInit() {
    this.gunInterpService.getUser();
    setTimeout(() => {
      this.gunInterpService.getGuns(this.generationType)
        .then(data => {this.guns = data, console.log(data, this.guns);})
        .catch(error => console.log(error));
    }, 1500);

  }

}
