import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './pages/auth/auth.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RepositoryService } from './pages/repository/repository.service';
import { Tag } from './pages/repository/repository.component';

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
  userAuthorized: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor (private router: Router, private authService: AuthService, private repService: RepositoryService) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showFilters = event.url.indexOf('repository') !== -1;
        this.updateIndex = event.url.indexOf('auto-rigger') !== -1 || event.url.indexOf('motion-editor') !== -1;
        this.hideFooter = event.url.indexOf('motion-editor') !== -1;
      }
    });
    this.repService.selectedTags$.subscribe((tag: Tag) => {
      console.log(tag);
      this.tags.push(tag.key || tag);
    });
  }
  checkLogin(url: string): void {
    if (this.authService.authenticated) {
      this.router.navigate([url]);
    } else {
      this.userAuthorized.next(true);
    }
    return;
  }
  ngOnInit() {

  }
}
