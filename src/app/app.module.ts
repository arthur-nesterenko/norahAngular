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
import { CharMakerComponent } from './pages/char-maker/char-maker.component';
import { DnaCodeComponent } from './pages/dna-code/dna-code.component';
import { HomeModule } from './pages/home/home.module';
import { RepositoryModule } from './pages/repository/repository.module';
import { RepositoryService } from './pages/repository/repository.service';
import { TerrainGenModule } from './pages/terrain-gen/terrain-gen.module';
import { TerrainGenService } from './pages/terrain-gen/terrain-gen.service';
import { SocketIoModule } from 'ng2-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CharMakerComponent,
    DnaCodeComponent
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
    SocketIoModule
  ],
  providers: [
    { provide: GlobalRef, useClass: BrowserGlobalRef }, DialogService, RepositoryService, TerrainGenService],

  bootstrap: [AppComponent]
})
export class AppModule { }
