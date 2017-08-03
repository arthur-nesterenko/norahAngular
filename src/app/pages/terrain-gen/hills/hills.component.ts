import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hills',
  templateUrl: './hills.component.html',
  styleUrls: ['./hills.component.scss']
})
export class HillsComponent implements OnInit {

  isGenerate = false;

  constructor() { }

  ngOnInit() {
  }

  nextTerGan() {
    this.isGenerate = !this.isGenerate;
    return false;
  }

}
