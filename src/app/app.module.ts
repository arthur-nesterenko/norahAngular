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
import { AuthModule } from './pages/auth/auth.module';
import { DialogService } from './pages/auth/dialog/dialog.component';
import { ExportGameComponent } from './pages/export-game/export-game.component';
import { CharMakerComponent } from './pages/char-maker/char-maker.component';
import { DnaCodeComponent } from './pages/dna-code/dna-code.component';
import { HomeModule } from './pages/home/home.module';
import { RepositoryModule } from './pages/repository/repository.module';
import { RepositoryService } from './pages/repository/repository.service';
import { TerrainGenModule } from './pages/terrain-gen/terrain-gen.module';
import { TerrainGenService } from './pages/terrain-gen/terrain-gen.service';
import { SocketIoModule } from 'ng2-socket-io';
//import { GunInterpModule } from './pages/gun-interp/gun-interp.module';
import { GunInterpModule } from './pages/gun-gen/gun-gen.module';
import { ImageZoomModule} from 'angular2-image-zoom';
//import { GunInterpService } from './pages/gun-interp/gun-interp.service';
import { GunInterpService } from './pages/gun-gen/gun-gen.service';
import { LibraryService } from './pages/library/library.service';
import { SeoService } from './seo.service';
import { GameMakerComponent } from './pages/game-maker/game-maker.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
	  ExportGameComponent,
    CharMakerComponent,
    DnaCodeComponent,
    GameMakerComponent
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
    TerrainGenModule,
    SocketIoModule,
    GunInterpModule,
    ImageZoomModule
  ],
  providers: [
    { provide: GlobalRef, useClass: BrowserGlobalRef },
    DialogService,
    LibraryService,
    RepositoryService,
    TerrainGenService,
    GunInterpService,
    SeoService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
