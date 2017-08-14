import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth/auth.service';
import { User } from 'firebase/app';
import { Animation } from '../repository/repository.component';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LibraryService {
  private removeSelected: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public removeSelected$: Observable<boolean> = this.removeSelected.asObservable();
  removeEvent: Observable<any>;
  user: User;
  library = [];

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) {}
  getAnimations(): FirebaseListObservable<Animation[]> {
    return this.db.list(`/usernames/${this.authService.currentUser.uid}/mylibrary`);
  }
  removeAnimationEvent($event: MouseEvent) {
    console.log($event);
    this.removeSelected.next(true);
  }
  removeAnimation(key) {
    console.log(key);
    return this.db.object(`/usernames/${this.authService.currentUser.uid}/mylibrary/${key}`).remove();
  }
}
