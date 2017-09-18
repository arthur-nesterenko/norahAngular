import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Http } from '@angular/http';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  animations: any;
  terrains: any;
  displayAnimations = [];
  page = 1;
  animationsCount = 0;
  selectedAnimations = [];

  constructor(private libService: LibraryService, private http: Http) {}

  ngOnInit() {
    this.libService.removeSelected$
      .skip(1)
      .subscribe(() => this.removeAnimations());
    this.libService.getAnimations()
      .map(items => {
        return items.map(item => {
          const animFileName = encodeURIComponent('animFiles/' + item.name + '.anim');
          const animMp4Name = encodeURIComponent('mp4Files/' + item.name + '.mp4');
          item.animUrl = `https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/${animFileName}?alt=media`;
          item.mp4Url = `https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/${animMp4Name}?alt=media`;

          item.selected = false;

          return item;
        });
      })
      .subscribe(items => {
        this.animations = items;
        this.setPage(1);
      });
  }
  setPage(page) {
    this.page = page;
    this.animationsCount = this.animations.length;
    this.displayAnimations = this.animations.slice((this.page - 1) * 15, (this.page - 1) * 15 + 15);
  }

  download(url) {
    this.http.get(url);
  }
  selectAnimation(animation, index) {
    animation.selected = !animation.selected;
    if (animation.selected) {
      this.selectedAnimations.push(animation);
    } else {
      this.selectedAnimations.splice(index, 1);
    }
  }
  removeAnimations() {
    const arr = this.animations.filter(animation => animation.selected);
    this.animations = this.animations.filter(animation => !animation.selected);
    arr.forEach(animation => this.libService.removeAnimation(animation.$key));
    this.selectedAnimations = [];
  }
}
