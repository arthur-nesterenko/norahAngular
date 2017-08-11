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
    @Inject(FirebaseApp) private firebaseApp: any,
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
        .ref(type)
        .child(`${item}.png`)
        .getDownloadURL()
        .then(data => data)
      );
    });
    return Promise.all(gunsArr)
      .then(data => data);
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
  pushNewGun(gunType: string, gunName: string) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const newObjRef = firebase.database()
      .ref('usernames')
      .child(this.user)
      .child('gunLibrary')
      .push();
    newObjRef.set({
      type: gunType,
      name: gunName
    });
    toastr.info('Added to your library');
  }
}


