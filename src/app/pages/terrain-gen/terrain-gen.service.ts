import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { FirebaseApp } from 'angularfire2/angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { GlobalRef } from '../../global-ref';

@Injectable()
export class TerrainGenService {

  private terrainsArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  user: any;
  private receivedData = [];

  constructor(
    @Inject(FirebaseApp) private firebaseApp: any,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private http: Http,
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
  getTerrains(type: string) {
    return this.http.get('https://www.googleapis.com/storage/v1/b/norahanimation.appspot.com/o',
      { search: `prefix=terrainImages/${type}` });
  }

  getTerrainsFromLibrary(type: string) {
    const terrainsArr = Observable.of([]);
    if (this.user) {
      const terrainLibraryList = this.db.list(`/usernames/${this.user}/terrainGenLibrary`);
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
    if ( firebase.auth().currentUser ) {
      const terrainType = terrain.type;
      const terrainName = terrain.name;
      firebase.database()
        .ref('usernames')
        .child(this.user)
        .child('terrainGenLibrary')
        .once('value', (snapshot) => {
          if ( snapshot.val() ) {
            firebase.database()
              .ref('usernames')
              .child(this.user)
              .child('terrainGenLibrary')
              .once('value', data => {
                const value = data.val();
                console.log(value);
                if ( value ) {
                  const exist = Object.keys(value).filter(key => {
                    return value[key].name === terrainName && value[key].type === terrainType;
                  });
                  console.log(exist);
                  if ( !exist.length ) {
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

  pushNewTerrain(terrainType: string, terrainName: string, src: string) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const newObjRef = firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('terrainGenLibrary')
      .push();
    newObjRef.set({
      type: terrainType,
      name: terrainName,
      src: src
    });
    toastr.info('Added to your library');
  }

  addTerrainToGame(terrain) {

    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    if ( firebase.auth().currentUser ) {
      const terrainType = terrain.type;
      const terrainName = terrain.name;
      console.log('terrainname' + terrainName);
      firebase.database()
        .ref('usernames')
        .child(firebase.auth().currentUser.uid)
        .child('gameLibrary')
        .child('terrainModels').orderByChild('name').equalTo(`${terrainType} ${terrainName}`).limitToFirst(1)
        .once('value', (snapshot) => {
          if ( snapshot.val() ) {
                const value = snapshot.val();
                console.log(value);
                console.log(snapshot);
                  const exist = Object.keys(value).filter(key => {
                    return value[key].name === terrainName && value[key].type === terrainType;
                  });
                    toastr.error('Already in your game library');


          } else {
            //not in the library // add it to lib
            //toastr.info("Not in your library");
             this.pushToGame(terrainType, terrainName, terrain.src);

            // this.pushToGame()
          }
        });
    }else{
          toastr.error('Please log in to first');
    }
  }

  removeTerrainsFromLibray(key){
    const terrainLibraryList = this.db.list(`/usernames/${this.user}/terrainGenLibrary`);
    terrainLibraryList.remove(key);
  }
  pushToGame(terrainType: string, terrainName: string, src?: string) {
    /*firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gameLibrary')
      .child('terrainModels')
      .on('child_added', (data) => {
        const file = data.val().src;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', file);
        xhr.responseType = 'blob';
        xhr.onload = (event: any) => {
          event.target.response.name = filename;
          firebase.storage().ref('/gameLibrary/terrainModels').child(`${filename}`).put(event.target.response);
        };
        xhr.send();
      });*/

    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;

        const newObjRef = firebase.database()
      .ref('usernames')
      .child(firebase.auth().currentUser.uid)
      .child('gameLibrary')
      .child('terrainModels')
      .push();
        const filename = `${newObjRef.key}.png`;

       const request = new XMLHttpRequest();
                request.open('GET', src, true);
                request.responseType = 'blob';

                request.send(null);
                toastr.info('preparing files to upload');
                request.onerror = (e: ErrorEvent) => {
                        toastr.erro('Failed to process file');
                };
                request.onreadystatechange =  () => {
                if (request.readyState === 4 && request.status === 200) {

                      //console.log(request.response);
                             firebase.storage().ref('/gameLibrary/terrainModels')
                               .child(`${filename}`)
                               .put(request.response)
                               .then((snapshot) => {

                                  console.log('adding terraingen to library');
                                  console.log(newObjRef);
                                  newObjRef.set({
                                  type: terrainType,
                                  name: `${terrainType} ${terrainName}`,
                                  src: src,
                                  imageLink: snapshot.downloadURL
                                  }).then((d) => {
                                      if (d){
                                              console.log('failed to add terrain gen to libraray');
                                                console.log(d);
                                                toastr.info('failed to add model to your library');
                                              }
                                          });
                                    toastr.info('Added to your library');




                             });

                    }};


       }
}
