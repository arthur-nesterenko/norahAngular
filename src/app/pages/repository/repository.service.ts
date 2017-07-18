import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseApp } from 'angularfire2/angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Animation, Tag } from './repository.component';

@Injectable()
export class RepositoryService {

  public page$: BehaviorSubject<number> = new BehaviorSubject((50));
  private firebaseApp;
  public selectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  private unselectedTags: BehaviorSubject<Tag[]> = new BehaviorSubject([]);
  public selectedTags$ = this.selectedTags.asObservable();
  public unselectedTags$ = this.unselectedTags.asObservable();
  private tagStore: Tag[] = [];

  constructor(
    @Inject(FirebaseApp) firebaseApp,
    private db: AngularFireDatabase
  ) {
    this.firebaseApp = firebaseApp;
    this.selectedTags.subscribe((tag: Tag) => {
      if (!this.tagStore.includes(tag)) {
        this.tagStore.push(tag);
      }
    });
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

  addTag(tag) {
    this.selectedTags.next(tag);
  }
  removeTagFromPanel(tag) {
    this.unselectedTags.next(tag);
  }
}
