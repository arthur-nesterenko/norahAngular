import { Component, OnInit } from '@angular/core';
import { RepositoryService } from './repository.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  animations: Animation[];
  tags: Tag[];


  constructor(private repService: RepositoryService) { }

  ngOnInit() {
    this.repService.animations.subscribe((result: Animation[]) => {
      result.forEach((animation: Animation) => {
        this.repService.animationsFiles(animation.name)
          .then((urls) => {

          animation.animUrl = urls.animURL;
          animation.mp4Url = urls.mp4URL;

          this.animations = result;

        }).then(() => this.animations = result)
      });
    });

    this.repService.tags.subscribe((tags: Tag[string]) => {
      this.tags = tags.map((tag: Tag) => {
        delete tag.$exists;

        let store = [];
        for ( let i in tag ) {
          if (i !== '$key') {
            store.push(tag[i])
          }
        }
        return {key: tag['$key'], tags: store};
      });
    });
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
  $exist: Function,
  $key: string;
  [key: string]: any;
}
