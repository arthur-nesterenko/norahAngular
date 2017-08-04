import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './pages/home/home.module';
import { AboutComponent } from './pages/about/about.component';
import { AuthModule } from './pages/auth/auth.module';
import { BrowserGlobalRef, GlobalRef } from './global-ref';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './pages/auth/auth-guard.service';
import { NouisliderModule } from 'ng2-nouislider';
import { DialogService } from './pages/auth/dialog/dialog.component';
import { RepositoryService } from './pages/repository/repository.service';
import { RepositoryModule } from './pages/repository/repository.module';
import { CharMakerComponent } from './pages/char-maker/char-maker.component';
import { LogoComponent } from './pages/logo/logo.component';
import { TerrainGenComponent } from './pages/terrain-gen/terrain-gen.component';
import { HillsComponent } from './pages/terrain-gen/hills/hills.component';
import { PlainsComponent } from './pages/terrain-gen/plains/plains.component';
import { IslandsComponent } from './pages/terrain-gen/islands/islands.component';
import { CavesComponent } from './pages/terrain-gen/caves/caves.component';
import { MountainsComponent } from './pages/terrain-gen/mountains/mountains.component';
import { TerrainGenService } from './pages/terrain-gen/terrain-gen.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CharMakerComponent,
    TerrainGenComponent,
    HillsComponent,
    PlainsComponent,
    IslandsComponent,
    CavesComponent,
    MountainsComponent,
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
    RepositoryModule

  ],
  providers: [
    { provide: GlobalRef, useClass: BrowserGlobalRef }, AuthGuard, DialogService, RepositoryService, TerrainGenService],

  bootstrap: [AppComponent]
})
export class AppModule { }
