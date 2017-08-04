import {Inject, Injectable} from '@angular/core';
import { FirebaseApp } from 'angularfire2/angularfire2';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { GlobalRef } from '../../global-ref';

@Injectable()
export class TerrainGenService {

  private terrainsArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  private terrains: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private terrainType: BehaviorSubject<string> = new BehaviorSubject<string>('');
  terrains$: Observable<string[]> = this.terrains.asObservable();
  constructor(@Inject(FirebaseApp) private firebaseApp, private global: GlobalRef) {
  }

  getTerrains(type: string) {
    const terrainsArr = [];
    this.terrainsArr.forEach(item => {
      terrainsArr.push(firebase
        .storage(this.firebaseApp)
        .ref(type)
        .child(`${item}.png`)
        .getDownloadURL()
        .then(data => data)
      );
    });
    return Promise.all(terrainsArr)
      .then(data => data);
  }

  selectTerrain(terrainType) {
    this.terrainType.next(terrainType);
  }
  addTerrain(terrain: string) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const userId = firebase.auth().currentUser.uid;
    firebase.database()
      .ref('usernames')
      .child(userId)
      .child('mylibrary/')  // Change this to myterrainlibrary, it gets mixed up with another lib in fb
      .once('value', snapshot => {
        const value = snapshot.val();
        const existing = Object.keys(value).some((key: string) => terrain === value[key].terrain);
        if (existing) {
          toastr.error('Already in your library');
        } else {
          // Change this to myterrainlibrary, it gets mixed up with another lib in fb⬇︎
          const newObjRef = firebase.database().ref('usernames').child(userId).child('mylibrary/').push();
          newObjRef.set({
            terrain: terrain
          });
          toastr.info('Added to your library');
        }
      });
  }
}