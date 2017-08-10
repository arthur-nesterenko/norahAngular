import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-gun-interp',
  templateUrl: './gun-interp.component.html',
  styleUrls: ['./gun-interp.component.scss']
})
export class GunInterpComponent implements OnInit {

  constructor() { }

  isGun: boolean = true;
  isGenerate: boolean = false;
  isTexture: boolean = false;
  openTexture() {
    if ( this.isTexture ) {
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
    if ( this.isGenerate ) {
      this.isTexture = false;
      this.isGun = true;
      this.isGenerate = false;
    } else {
      this.isTexture = false;
      this.isGun = false;
      this.isGenerate = true;
    }
  }
  ngOnInit() {
  }

}
