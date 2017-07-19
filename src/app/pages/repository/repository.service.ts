import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2/angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Animation, Tag } from './repository.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RepositoryService {

  public page$: BehaviorSubject<number> = new BehaviorSubject((50));
  private firebaseApp;
  private selectedTags = new Subject<string>();
  private unselectedTags = new Subject<string>();
  selectedTags$ = this.selectedTags.asObservable();
  unselectedTags$ = this.unselectedTags.asObservable();
  private tagStore: string[] = [];

  constructor(
    @Inject(FirebaseApp) firebaseApp,
    private db: AngularFireDatabase
  ) {
    this.firebaseApp = firebaseApp;
  }
  get animations(): Observable<Animation[]> {
    return this.db.list('/animations', {
      query: {
        orderByChild: 'name',
        limitToFirst: this.page$
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

  addTag(tag: string) {
    if (!this.tagStore.includes(tag)) {
      this.tagStore.push(tag);
    }
    console.log('tag', tag);
    this.selectedTags.next(tag);
  }
  removeTagFromPanel(tag) {
    this.tagStore.splice(this.tagStore.indexOf(tag), 1);
    this.unselectedTags.next(tag);
  }
}
