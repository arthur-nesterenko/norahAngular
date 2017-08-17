import { Injectable } from '@angular/core';
import {
  GlobalRef
} from '../../global-ref';
import {  AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class LibraryService {

  constructor(private firedb:AngularFireDatabase) { }

  getCharModels(){

    
    return this.firedb.list(`usernames/${firebase.auth().currentUser.uid}/gameLibrary/charModels`);

  }

}
