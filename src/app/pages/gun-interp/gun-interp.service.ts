import {
  Inject,
  Injectable
} from '@angular/core';
import {
  FirebaseApp
} from 'angularfire2/angularfire2';
import * as firebase from 'firebase';
import {
  GlobalRef
} from '../../global-ref';
import {
  Observable
} from 'rxjs/Observable';
import {
  AngularFireDatabase
} from 'angularfire2/database';
import {
  AngularFireAuth
} from 'angularfire2/auth';

@Injectable()
export class GunInterpService {
  private gunsArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  user: any;
  constructor(
    @Inject(FirebaseApp) public firebaseApp: any,
    private db: AngularFireDatabase,
    private auth: AngularFireAuth,
    private global: GlobalRef) {
    this.getUser();
  }

  getUser() {
    this.auth.subscribe(user => user ? this.user = user.uid : '');
  }
  getGuns(type: string) {
    const gunsArr = [];
    this.gunsArr.forEach(item => {
      gunsArr.push(firebase
        .storage(this.firebaseApp)
        .ref(`${type}`)
        .child(`${item}.png`)
        .getDownloadURL()
        .then(data => data)
      );
    });
    return Promise.all(gunsArr)
      .then(data => data);
  }
  getGunsFromLibrary(type: string) {
    const gunArr = Observable.of([]);
    if (this.user) {
      let list = this.db.list(`/usernames/${this.user}/gunLibrary`);
      return list;
    } else {
      console.log('SHIT HAPPENED');
      return Observable.of([]);
    };


  }

  addGun(gun) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    if (firebase.auth().currentUser) {
      const gunType = gun.type;
      const gunName = gun.name;
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
                    return value[key].name === gunName && value[key].type === gunType;
                  });
                  console.log(exist);
                  if (!exist.length) {
                    this.pushNewGun(gunType, gunName);
                  } else {
                    toastr.error('Already in your library');
                  }
                } else {
                  toastr.error('Already in your library');
                }
              });
          } else {
            this.pushNewGun(gunType, gunName);
          }
        });
    }
  }
  addGunToGame(gun) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    if (firebase.auth().currentUser) {
      const gunType = gun.type;
      const gunName = gun.name;
      firebase.database()
        .ref('usernames')
        .child(this.user)
        .child('gameLibrary')
        .child('gunModels')
        .once('value', (snapshot) => {
          if (snapshot.val()) {
            firebase.database()
              .ref('usernames')
              .child(this.user)
              .child('gameLibrary')
              .child('gunModels')
              .once('value', data => {
                const value = data.val();
                if (value) {
                  const exist = Object.keys(value).filter(key => {
                    return value[key].name === gunName && value[key].type === gunType;
                  });
                  console.log(exist);
                  if (!exist.length) {
                    this.pushToGame(gunType, gunName, gun.src);
                  } else {
                    toastr.error('Already in your library');
                  }
                } else {
                  toastr.error('Already in your library');
                }
              });
          } else {
            this.pushToGame(gunType, gunName, gun.src);
          }
        });
    }
  }
  pushNewGun(gunType: string, gunName: string) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const newObjRef = firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gunLibrary')
      .push();
    const gunIndexName = gunName.match(/%2F(.+)\?/)[1];
    newObjRef.set({
      type: gunType,
      name: gunIndexName
    });
    toastr.info('Added to your library');
  }
  pushToGame(gunType: string, gunName: string, src: string) {
    firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gameLibrary')
      .child('gunModels')
      .once('child_added', (data) => {
        const filename = `${data.key}.png`;
        const file = data.val().src;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', file);
        xhr.responseType = 'blob';
        xhr.onload = (event: any) => {
          event.target.response.name = filename;
          firebase.storage().ref('/gameLibrary/gunModels').child(`${filename}`).put(event.target.response);
        };
        xhr.send();
      });
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const newObjRef = firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gameLibrary')
      .child('gunModels')
      .push();
    newObjRef.set({
      type: gunType,
      name: gunName,
      src: src
    });
    toastr.info('Added to your library');
  }

}


