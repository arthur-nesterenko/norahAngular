import { AfterViewInit, Component } from '@angular/core';
import {WOW} from 'wowjs/dist/wow.min.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    new WOW().init();
  }
}
