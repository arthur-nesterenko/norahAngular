import { AfterViewInit, Component, Inject } from '@angular/core';
import {WOW} from 'wowjs/dist/wow.min.js';
import * as firebase from 'firebase';
import { GlobalRef } from '../../global-ref';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  
   constructor (@Inject(FirebaseApp) private firebaseApp, private global: GlobalRef) {
     firebase.auth(firebaseApp).signOut();
  
   }
  
  ngAfterViewInit() {
    new WOW().init();
  }
}
