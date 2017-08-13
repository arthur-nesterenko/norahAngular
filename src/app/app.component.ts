import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import * as $ from 'jquery';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GlobalRef } from './global-ref';
import { AuthService } from './pages/auth/auth.service';
import { RepositoryService } from './pages/repository/repository.service';
import { LibraryService } from './pages/library/library.service';
import { Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';
import { SEO_CONFIGURATION } from './seo.config';
import { dashCaseToCamelCase } from '@angular/platform-browser/src/dom/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  tags = [];
  showFilters: boolean;
  updateIndex: boolean;
  hideFooter: boolean;
  myLibrary: boolean;
  userAuthorized: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private router: Router, private authService: AuthService,
              private repService: RepositoryService, private libService: LibraryService, private seoService: SeoService) {

    this.router.events.subscribe((event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        this.showFilters = event.url.indexOf('repository') !== -1 || event.url.indexOf('my-library') !== -1;
        this.myLibrary = event.url.indexOf('my-library') !== -1;
        this.updateIndex = event.url.indexOf('auto-rigger') !== -1 || event.url.indexOf('motion-editor') !== -1;
        this.hideFooter = event.url.indexOf('auto-rigger') !== -1 || event.url.indexOf('motion-editor') !== -1 ||
          event.url.indexOf('style-transfer') !== -1;
      }
      if ( event instanceof NavigationStart ) {
        const url = dashCaseToCamelCase(event.url.substring(1));
        url ? this.setSEO(url) : this.setSEO('home');
      }
    });
    repService.selectedTags$
      .subscribe((tag: string) => {
        this.tags.push(tag);
      });
  }
  setSEO(page) {
    const seoConfig = SEO_CONFIGURATION[page].seo;
    this.seoService.setTitle(seoConfig.title);
    this.seoService.setMetaDescription(seoConfig.description);
    this.seoService.setMetaKeywords(seoConfig.keywords);
}
  checkLogin(url: string): void {
    if (this.authService.authenticated) {
      this.router.navigate([url]);
    } else {
      this.userAuthorized.next(true);
    }
    return;
  }
  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
    this.repService.removeTagFromPanel(tag);
  }
  deleteSelected($event) {
    this.libService.removeAnimationEvent($event);
  }
  ngOnInit() {

  }
}
