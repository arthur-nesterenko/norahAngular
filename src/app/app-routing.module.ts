import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
    component: AboutComponent
  },
  {
    path: 'contact-us',
    loadChildren: 'app/pages/contact-us/contact-us.module#ContactUsModule',
  },
  {
    path: 'repository',
    loadChildren: 'app/pages/repository/repository.module#RepositoryModule',
  },
  {
    path: 'auto-rigger',
    loadChildren: 'app/pages/auto-rigger/auto-rigger.module#AutoRiggerModule',
  },
  {
    path: 'my-library',
    loadChildren: 'app/pages/library/library.module#LibraryModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'style-transfer',
    loadChildren: 'app/pages/style-transfer/style-transfer.module#StyleTransferModule',
    // canActivate: [AuthGuard]
  },
  {
    path: 'motion-editor',
    loadChildren: 'app/pages/motion-editor/motion-editor.module#MotionEditorModule',
    // canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
