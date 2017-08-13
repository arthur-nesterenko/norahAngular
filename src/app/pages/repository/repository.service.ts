import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Animation } from './repository.component';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class RepositoryService {

  private page: BehaviorSubject<number> = new BehaviorSubject(1);
  public page$: Observable<number> = this.page.asObservable();
  private firebaseApp;
  private selectedTags = new Subject<string>();
  private unselectedTags = new Subject<string>();
  selectedTags$ = this.selectedTags.asObservable();
  unselectedTags$ = this.unselectedTags.asObservable();
  private tagStore: string[] = [];

  constructor(
    private db: AngularFireDatabase
  ) {
  }
  get animations(): Observable<Animation[]> {
    firebase.database().ref('/tags')
      .once('value', (data) => {
      console.log(data.val());
    });
    firebase.database().ref('/animations').orderByChild('name')
      .once('value', (data) => {
      console.log(data.val());
    });
    return this.db.list('/animations', {
      query: {
        orderByChild: 'name'
      }
    });
  }
  nextPage(page: number) {
    this.page.next(page);
  }
  get tags() {
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
