import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  animations = [];
  tags: Tag[];
  selectedTags: Tag[];
  page = 1;


  constructor(private repService: RepositoryService) { }

  ngOnInit() {
    const arr = [];
    this.animations = arr;
    this.selectedTags = [];
    this.repService.page$.next(50);

    this.repService.animations.subscribe((result: Animation[]) => {
      result.forEach((animation: Animation) => {
        arr.push(animation);
        this.repService.animationsFiles(animation.name)
          .then((urls) => {
            animation.animUrl = urls.animURL;
            animation.mp4Url = urls.mp4URL;
            console.log(animation.animUrl, animation.mp4Url);
          });
      });
    });

    this.repService.tags.subscribe((tags: Tag[string]) => {
      this.tags = tags.map((tag: Tag) => {
        delete tag.$exists;

        const store = [];
        for ( let i in tag ) {
          if (i !== '$key') {
            store.push(tag[i])
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
  }
}

export interface Animation {
  $exist: Function,
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
  $exist?: Function,
  $key?: string;
  [key: string]: any;
}
