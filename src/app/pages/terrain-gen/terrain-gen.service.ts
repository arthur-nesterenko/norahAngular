import {Inject, Injectable} from '@angular/core';
import { FirebaseApp } from 'angularfire2/angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class TerrainGenService {

  private terrainsArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];


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


  private terrains: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private terrainType: BehaviorSubject<string> = new BehaviorSubject<string>('');
  terrains$: Observable<string[]> = this.terrains.asObservable();
  constructor(@Inject(FirebaseApp) private firebaseApp, private global: GlobalRef) {
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