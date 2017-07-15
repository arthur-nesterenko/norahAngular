import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { AboutComponent } from './pages/about/about.component';
import { LogoModule } from './pages/logo/logo.module';
import { AuthModule } from './pages/auth/auth.module';
import { BrowserGlobalRef, GlobalRef } from './global-ref';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './pages/auth/auth-guard.service';
import { DialogService } from './pages/auth/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    HomeModule,
    LogoModule,

  ],
  providers: [{ provide: GlobalRef, useClass: BrowserGlobalRef }, AuthGuard, DialogService],

  bootstrap: [AppComponent]
})
export class AppModule { }
