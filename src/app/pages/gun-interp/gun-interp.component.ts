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

  ngOnInit() {
  }

}
