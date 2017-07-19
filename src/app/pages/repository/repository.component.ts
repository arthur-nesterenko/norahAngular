import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import 'rxjs/add/operator/map';
import { GlobalRef } from '../../global-ref';
import * as firebase from 'firebase';
import * as $ from 'jquery';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit, AfterViewInit {
  animations = [];
  displayAnimations = [];
  tags: string[];
  selectedTags: string[];
  page = 1;


  constructor(private repService: RepositoryService, private global: GlobalRef) {
    repService.unselectedTags$.subscribe(tag => {
      this.removeTag(tag);
    })
  }

  ngOnInit() {
    const arr = [];
    this.animations = arr;
    this.displayAnimations = arr;
    this.selectedTags = [];
    this.repService.page$.next(50);

    this.repService.animations.subscribe((result: Animation[]) => {
      result.forEach((animation: Animation) => {
        arr.push(animation);
        this.repService.animationsFiles(animation.name)
          .then((urls) => {
            animation.animUrl = urls.animURL;
            animation.mp4Url = urls.mp4URL;
          });
      });
    });

    this.repService.tags.subscribe((tags: Tag[string]) => {
      this.tags = tags.map((tag: Tag) => {
        delete tag.$exists;

        const store = [];
        for ( const i in tag ) {
          if (i !== '$key') {
            store.push(tag[i]);
          }
        }
        return {key: tag['$key'], tags: store};
      });
    });
  }
  setPage(page) {
    this.repService.page$.next(page * 8 || 8);
  }
  addTag(tag) {
    this.repService.addTag(tag);
    if (!this.selectedTags.includes(tag)) {
      this.selectedTags.push(tag);
    }
    this.filterAnimations();
  }
  removeTag(tag) {
    this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    this.filterAnimations();
  }
  filterAnimations() {
    const arr = [];
    this.animations.forEach(item => {
      this.selectedTags.forEach(tag => {
        if (item.tags[tag]) {
          arr.push(item);
        }
      });
    });
    this.displayAnimations = arr.length ? arr : this.animations;
  }
  addVideo(animation) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const download = wnd.download;
    if (firebase.auth().currentUser) {
      const animName = animation.name;
      const duration = animation.duration;
      const displayName = animation.displayName;
      const userId = firebase.auth().currentUser.uid;
      console.log('UID' + userId);
      firebase.database().ref('usernames').child(userId).child('mylibrary').once('value', function (snap) {
        const libraryItems = snap.val();
        let exists = false;
        console.log(libraryItems);
        libraryItems && Object.keys(libraryItems).forEach(function (itemKey) {
          exists = exists || (libraryItems[itemKey]['name'] === animName);
        });
        if (!exists) {
          const newObjRef = firebase.database().ref('usernames').child(userId).child('mylibrary/').push();

          const storageBucket = (firebase.app().options as any).storageBucket;
          const animMp4Name = 'mp4Files/' + animName + '.mp4';
          const mp4Url = `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/${encodeURIComponent(animMp4Name)}?alt=media`;

          const animFileName = 'animFiles/' + animName + '.anim';
          const animFileUrl = `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o/
            ${encodeURIComponent(animFileName)}?alt=media`;

          newObjRef.set({
            displayName: displayName,
            name: animName,
            duration: duration
          });
          toastr.info('Added to your library');
        } else {
          toastr.error('Already in your library');
        }
      });
    }
    $('.download-anim').click(function () {
      const animDownloadUrl = $(this).data('url');
      const animName = $(this).data('name');
      $.ajax({
        url: animDownloadUrl,
      });
    });
  }

  ngAfterViewInit() {


  }
}

export interface Animation {
  $exist: Function;
  $key: string;
  animUrl: string;
  duration: number;
  jsonUrl: string;
  mp4Url: string;
  name: string;
  yamlUrl: string;
  tags: Tag[];
}

export interface Tag {
  $exist?: Function;
  $key?: string;
  [key: string]: any;
}
