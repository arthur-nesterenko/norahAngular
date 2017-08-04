import {Inject, Injectable} from '@angular/core';
import { FirebaseApp } from 'angularfire2/angularfire2';
import * as firebase from 'firebase';
import { GlobalRef } from '../../global-ref';

@Injectable()
export class TerrainGenService {

  private terrainsArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(
    @Inject(FirebaseApp) private firebaseApp: any,
    private global: GlobalRef) {
  }

  /* Get data from Firebase Storage */
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

  /* Add data to Firebase db */
  addTerrain(terrain) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    if (firebase.auth().currentUser) {
      const userId = firebase.auth().currentUser.uid;
      const terrainType = terrain.type;
      const terrainName = terrain.name;
      firebase.database()
        .ref('usernames')
        .child(userId)
        .child('mylibrary')
        .once('value', snapshot => {
          const value = snapshot.val();
          const exist = Object.keys(value).forEach(itemKey => value[itemKey]['name'] === terrainName);
          if (!exist) {
            const newObjRef = firebase.database().ref('usernames').child(userId).child('mylibrary/').push();
            newObjRef.set({
              type: terrainType,
              name: terrainName
            });
            toastr.info('Added to your library');
          } else {
            toastr.error('Already in your library');
          }
        });
    }
  }

}
