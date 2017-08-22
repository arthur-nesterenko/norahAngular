import {Inject, Injectable} from '@angular/core';
import { FirebaseApp } from 'angularfire2/angularfire2';
import * as firebase from 'firebase';
import { GlobalRef } from '../../global-ref';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FileLoader } from 'three';

@Injectable()
export class GunInterpService {

  private terrainsArr: number[] = [1, 2, 3, 4, 5];
  user: any;
  private receivedData = [];

  constructor(
    @Inject(FirebaseApp) private firebaseApp: any,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private global: GlobalRef) {
    this.getUser();

  }

  setReceivedData(receivedData) {
    this.receivedData = receivedData;
  }
  getReceivedData() {
    return this.receivedData;
  }

  getUser() {
    this.auth.subscribe(user => user ? this.user = user.uid : '');
  }

  /* Get data from Firebase Storage */
  getGuns(type: string) {
    const terrainsArr = [];
    this.terrainsArr.forEach(item => {
      terrainsArr.push(firebase
        .storage(this.firebaseApp)
        .ref('gunImages')
        .child(type)
        .child(`gun${item}.png`)
        .getDownloadURL()
        .then(data => data)
      );
    });
    return Promise.all(terrainsArr)
      .then(data => data);
  }

  getGunsFromLibrary(type: string) {
    if (this.user) {
      const terrainLibraryList = this.db.list(`/usernames/${this.user}/gunLibrary`);
      console.log(terrainLibraryList);
      return terrainLibraryList;
    } else {
      console.log('SHIT HAPPENED');
      return Observable.of([]);
    }
  }

  /* Add data to Firebase db */
  addTerrain(terrain) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    if (firebase.auth().currentUser) {
      const terrainType = terrain.type;
      const terrainName = terrain.name;
      firebase.database()
        .ref('usernames')
        .child(this.user)
        .child('gunLibrary')
        .once('value', (snapshot) => {
          if (snapshot.val()) {
            firebase.database()
              .ref('usernames')
              .child(this.user)
              .child('gunLibrary')
              .once('value', data => {
                const value = data.val();
                if (value) {
                  const exist = Object.keys(value).filter(key => {
                    return value[key].name === terrainName && value[key].type === terrainType;
                  });
                  console.log(exist);
                  if (!exist.length) {
                    this.pushNewTerrain(terrainType, terrainName, terrain.src);
                  } else {
                    toastr.error('Already in your library');
                  }
                } else {
                  toastr.error('Already in your library');
                }
              });
          } else {
            this.pushNewTerrain(terrainType, terrainName, terrain.src);
          }
        });
    }
  }
  addTerrainToGame(terrain) {

    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    if ( firebase.auth().currentUser ) {
      const terrainType = terrain.type;
      const terrainName = terrain.name;
      firebase.database()
        .ref('usernames')
        .child(this.user)
        .child('gameLibrary')
        .child('terrainModels')
        .once('value', (snapshot) => {
          if ( snapshot.val() ) {
            firebase.database()
              .ref('usernames')
              .child(this.user)
              .child('gameLibrary')
              .child('terrainModels')
              .once('value', data => {
                const value = data.val();
                if ( value ) {
                  const exist = Object.keys(value).filter(key => {
                    return value[key].name === terrainName && value[key].type === terrainType;
                  });
                  console.log(exist);
                  if ( !exist.length ) {
                    this.pushToGame(terrainType, terrainName, terrain.src);
                  } else {
                    toastr.error('Already in your library');
                  }
                } else {
                  toastr.error('Already in your library');
                }
              });
          } else {
            this.pushToGame(terrainType, terrainName, terrain.src);
          }
        });
    }
  }

  removeTerrainsFromLibray(key){
    let terrainLibraryList = this.db.list(`/usernames/${this.user}/gunLibrary`);
    terrainLibraryList.remove(key);
  }

  pushNewTerrain(terrainType: string, terrainName: string, src?: string) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const newObjRef = firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gunLibrary')
      .push();
    newObjRef.set({
      type: terrainType,
      name: terrainName,
      src: src
    }, (result) => console.log(result)).then(result => {
      console.log(result);
    });
    toastr.info('Added to your library');
  }
  pushToGame(terrainType: string, terrainName: string, src?: string) {
    firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gameLibrary')
      .child('terrainModels')
      .on('child_added', (data) => {
        const filename = `${data.key}.png`;
        const file = data.val().src;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', file);
        xhr.responseType = 'blob';
        xhr.onload = (event: any) => {
          event.target.response.name = filename;
          firebase.storage().ref('/gameLibrary/terrainModels').child(`${filename}`).put(event.target.response);
        };
        xhr.send();
      });
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const newObjRef = firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gameLibrary')
      .child('terrainModels')
      .push();
    newObjRef.set({
      type: terrainType,
      name: `${terrainType} ${terrainName}`,
      src: src
    });
    toastr.info('Added to your library');
  }
}
