import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.scss']
})
export class MountainsComponent implements OnInit {

  mountains: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  isGenerate: boolean = false;
  isOpen: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  nextTerGan() {
    this.isGenerate = !this.isGenerate;
    return false;
  }

  test() {
    this.isOpen = !this.isOpen;
  }

}
