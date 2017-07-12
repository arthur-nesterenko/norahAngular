import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './pages/auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'my-library',
    loadChildren: 'app/pages/library/library.module#LibraryModule',
  },
  {
    path: 'contact-us',
    loadChildren: 'app/pages/contact-us/contact-us.module#ContactUsModule',
  },
  {
    path: 'repository',
    loadChildren: 'app/pages/repository/repository.module#RepositoryModule',
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: NoPreloading})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
