import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2/angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class RepositoryService {
  private firebaseApp;
  public page: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(
    @Inject(FirebaseApp) firebaseApp,
    private db: AngularFireDatabase
  ) {
    this.firebaseApp = firebaseApp;
  }
  get animations(): Observable<any[]> {
    return this.db.list('/animations', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  animationsFiles(name: string) {
    return this.firebaseApp.storage().ref('animFiles').child(`${name}.anim`).getDownloadURL()
      .then((animURL: string) => this.firebaseApp.storage().ref('mp4Files').child(`${name}.mp4`).getDownloadURL()
        .then((mp4URL: string) => ({animURL: animURL, mp4URL: mp4URL})));
  }

  get tags(): FirebaseListObservable<any[]> {
    return this.db.list('/tags');
  }
}
