import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import * as $ from 'jquery';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import { GlobalRef } from '../../global-ref';
import { RepositoryService } from './repository.service';

@Component({
  selector: 'bc-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit, AfterViewInit {
  animations = [];
  displayAnimations = [];
  tags: string[];
  selectedTags: string[];
  page = 1;
  keyword = '';
  animationsCount = 0;
  search: EventEmitter<string> = new EventEmitter();

  constructor(private repService: RepositoryService, private global: GlobalRef) {
    repService.unselectedTags$.subscribe(tag => {
      this.removeTag(tag);
    });
  }

  ngOnInit() {
    const arr = [];
    this.animations = arr;
    this.displayAnimations = arr;
    this.selectedTags = [];
    this.repService.animations
      .subscribe((result: Animation[]) => {
      result = result.sort((a, b) => {
        return a.displayName.localeCompare(b.displayName);
      });
        this.animations = result;
        this.filterAnimations(false);
      });
    this.repService.page$.subscribe(page => {
      this.page = page;
      this.filterAnimations(false);
    });
    this.repService.tags.subscribe((tags: Tag[string]) => {
      this.tags = tags.map((tag: Tag) => {
        delete tag.$exists;

        const store = [];
        for ( const i in tag ) {
          if ( i !== '$key' ) {
            store.push(tag[i]);
          }
        }
        return { key: tag['$key'], tags: store };
      });
    });
    this.search
      .debounceTime(800)
      .subscribe(value => {
        this.keyword = value;
        this.filterAnimations(true);
      });
  }

  setPage(page) {
    this.repService.nextPage(page);
  }

  addTag(tag) {
    if ( !this.selectedTags.includes(tag) ) {
      this.selectedTags.push(tag);
      this.repService.addTag(tag);
    }
    this.filterAnimations(true);
    this.repService.nextPage(1);
  }

  removeTag(tag) {
    this.selectedTags.splice(this.selectedTags.indexOf(tag), 1);
    this.filterAnimations(false);
    this.repService.nextPage(1);
  }

  filterAnimations(showToast: boolean) {
    let results;
    if (!this.keyword) {
      results = this.animations.slice();
    } else {
      results = this.animations.filter(item => {
        return item.name.indexOf(this.keyword) !== -1;
      });
    }
    const selectedTags = this.selectedTags;
    if (selectedTags.length) {
      const arrayLength = selectedTags.length;
      const animFinal = [];
      if ( arrayLength > 0 && !$.isEmptyObject(results) ) {
        results.forEach(function (anim) {

          let count = 0;
          for ( const t in anim['tags'] ) {
            for ( let i = 0; i < arrayLength; i++ ) {
              if ( t === selectedTags[i] ) {
                count++;
              }
            }
          }
          if ( count === arrayLength ) {
            animFinal.push(anim);
          }
        });
      }
      results = animFinal;
    }
    this.animationsCount = results.length;
    this.displayAnimations = results.slice((this.page - 1) * 15, (this.page - 1) * 15 + 15);
    if (showToast) {
      this.showToast();
    }
  }
  showToast() {
    console.log(this.animationsCount);
    if ( this.animationsCount ) {
      this.global.nativeGlobal.toastr.info(`${this.animationsCount} animations found`);
    } else {
      this.global.nativeGlobal.toastr.error('No animations found!');
    }
  }
  checkTag(tag, array) {
    const a = array.filter((item) => item.tags[tag]);
    return a.length === array.length;
  }

  addVideo(animation) {
    const wnd = this.global.nativeGlobal;
    const toastr = wnd.toastr;
    const download = wnd.download;
    if ( firebase.auth().currentUser ) {
      const animName = animation.name;
      const duration = animation.duration;
      const displayName = animation.displayName;
      const userId = firebase.auth().currentUser.uid;
      console.log('UID' + userId);
      firebase.database().ref('usernames').child(userId).child('mylibrary').once('value', function (snap) {
        const libraryItems = snap.val();
        let exists = false;
        console.log(libraryItems);
        Object.keys(libraryItems).forEach(function (itemKey) {
          exists = libraryItems[itemKey]['name'] === animName;
        });
        if ( !exists ) {
          const newObjRef = firebase.database().ref('usernames').child(userId).child('mylibrary/').push();

          const storageBucket = (firebase.app().options as any).storageBucket;
          const animMp4Name = `mp4Files/${animName}.mp4`;
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
        url: animDownloadUrl
      });
    });
  }

  matchTags() {
    const arrayLength = this.selectedTags.length;
    const anim_final = [];
    if ( arrayLength > 0 && !$.isEmptyObject(this.displayAnimations) ) {
      this.displayAnimations.forEach((anim) => {
        let count = 0;
        for ( const t in anim['tags'] ) {
          for ( let i = 0; i < arrayLength; i++ ) {
            if ( t === this.selectedTags[i] ) {
              count++;
            }
          }
        }
        if ( count === arrayLength ) {
          anim_final.push(anim);
        }
      });
    } else {
      return this.displayAnimations;
    }
    return anim_final;
  }

  KeywordChanged(text) {
    this.keyword = text.toLowerCase();
  }

  isEmpty() {
    return this.keyword.length <= 0;
  }

  getKeyWord() {

    return this.keyword;
  }

  searchKeywords(anims) {
    if ( this.keyword.length > 0 ) {
      const filteredAnims = [];
      anims.filter((anim) => {
        const k = this.keyword.split(' ');
        for ( let i = 0; i < k.length; i++ ) {
          if ( anim.displayName.toLowerCase().indexOf(k[i]) >= 0 ) {
            console.log('Key: ' + k + ' name ' + anim.displayName);
            filteredAnims.push(anim);
            return anim;

          }
        }

        return false;

      });
      return filteredAnims;
    } else {
      return anims;
    }
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
  displayName: string;
  yamlUrl: string;
  tags: Tag[];
}

export interface Tag {
  $exist?: Function;
  $key?: string;

  [key: string]: any;
}
