import { Inject, Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2';
import { GlobalRef } from '../../global-ref';

@Injectable()
export class TerrainGenService {
  private terrainFilesRange: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  private terrains: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private terrainType: BehaviorSubject<string> = new BehaviorSubject<string>('');
  terrains$: Observable<string[]> = this.terrains.asObservable();

  constructor(@Inject(FirebaseApp) private firebaseApp, private global: GlobalRef) {
  }

  selectTerrain(terrainType) {
    this.terrainType.next(terrainType);
  }

  getTerrains(type) {
    const terrains = [];
    this.terrainFilesRange.forEach(value => {
      terrains.push(firebase
        .storage(this.firebaseApp)
        .ref(type)
        .child(`${value}.png`)
        .getDownloadURL()
        .then(terrain => {
           return terrain;
        })
      );
    });
    return Promise.all(terrains).then(terrainsFinal => terrainsFinal);
  }
  addTerrain(terrain: string) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const userId = firebase.auth().currentUser.uid;
    firebase.database()
      .ref('usernames')
      .child(userId)
      .child('mylibrary/')
      .once('value', snapshot => {
        const value = snapshot.val();
        const existing = Object.keys(value).some((key: string) => terrain === value[key].terrain);
        if (existing) {
          toastr.error('Already in your library');
        } else {
          const newObjRef = firebase.database().ref('usernames').child(userId).child('mylibrary/').push();
          newObjRef.set({
            terrain: terrain
          });
          toastr.info('Added to your library');
        }
      });
  }
}
