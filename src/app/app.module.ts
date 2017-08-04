import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NouisliderModule } from 'ng2-nouislider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserGlobalRef, GlobalRef } from './global-ref';
import { AboutComponent } from './pages/about/about.component';
import { AuthGuard } from './pages/auth/auth-guard.service';
import { AuthModule } from './pages/auth/auth.module';
import { DialogService } from './pages/auth/dialog/dialog.component';
import { CharMakerComponent } from './pages/char-maker/char-maker.component';
import { TerrainGenService } from './pages/terrain-gen/terrain-gen.service';
import { HomeModule } from './pages/home/home.module';
import { RepositoryModule } from './pages/repository/repository.module';
import { RepositoryService } from './pages/repository/repository.service';
import { TerrainGenModule } from './pages/terrain-gen/terrain-gen.module';
import {LogoComponent} from "./pages/logo/logo.component";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CharMakerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    NouisliderModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    RepositoryModule,
    TerrainGenModule
  ],
  providers: [
    { provide: GlobalRef, useClass: BrowserGlobalRef }, AuthGuard, DialogService, RepositoryService, TerrainGenService],

  bootstrap: [AppComponent]
})
export class AppModule { }
