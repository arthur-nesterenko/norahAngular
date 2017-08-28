import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {HttpModule, Http,Response,Headers,RequestOptions, Request, RequestMethod, URLSearchParams} from '@angular/http';

import { Enemies } from './../../enemies';
import { Npcs } from './../../npcs';

@Component({
  selector: 'app-sniper',
  templateUrl: './sniper.component.html',
  styleUrls: ['./sniper.component.css']
})
export class SniperComponent implements OnInit {
  gameDataForm: FormGroup;
  data: any;

  someURL:string;
  companyName:any;
  gameName:any;
  bundleIdentifier:any;
  versionCode:any;
  versionNumber:any;
  appIconFile:any;
  exportForAndroid:any;
  exportForIos:any;
  exportForWebGl:any;

  sceneHeightMapFile:any;
  textureTileSizeY:any;
  textureTileSizeX:any;

  VR:any;
 
  playerPrefabName:any;
  playerPositionIndex:any;
  playerPowerLeg:any;
  playerPowerBody:any;
  playerPowerHead:any;

  gunModelFile:any;
  gunTextureFile:any;
  gunHeightmapFile:any;
  fireAnimationFile:any;
  recoilAnimationFile:any;
  fireSoundFile:any;
  recoilSoundFile:any;
  range:any;
  maxAngle:any;
  zoomScope:any;
  reloadTime:any;
  magSize:any;

  guid:any;
  enemies: Enemies[];
  npcs: Npcs[];

  constructor( private formBuilder: FormBuilder,private http:Http) { 
    this.gameDataForm = this.formBuilder.group({
      name: new FormControl('qwerty'),
      name2:new FormControl('ytrewq')
    });
  }

  ngOnInit() {
    this.addEnemies();
    this.addEnemies();
  }

  submit() {
  //  http://23.251.152.144/SniperBuilder/Builds/New
  //   let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  //  var body = 'username=myusername?password=mypassword';
  //body.set('name',this.gameDataForm.controls['name'].value);

console.log(this.gameDataForm.value);
console.log(this.gameDataForm.controls['name'].value);

//let body = `name=${this.gameDataForm.controls['name'].value}&name2=${this.gameDataForm.controls['name2'].value}`
let urlSearchParams = new URLSearchParams();
// urlSearchParams.append('name', this.gameDataForm.controls['name'].value);
// urlSearchParams.append('name2', this.generateGuid());

//BuildInfo
urlSearchParams.append('BuildInfo.CompanyName',this.companyName);
urlSearchParams.append('BuildInfo.GameName' ,this.gameName);
urlSearchParams.append('BuildInfo.BundleIndentifier' ,this.bundleIdentifier);
urlSearchParams.append('BuildInfo.VersionCode' ,this.versionCode);
urlSearchParams.append('BuildInfo.VersionNumber' ,this.versionNumber);
urlSearchParams.append('BuildInfo.AppIconFile' ,this.appIconFile);
urlSearchParams.append('BuildInfo.ExportForAndroid' ,this.exportForAndroid);
urlSearchParams.append('BuildInfo.ExportForIOS' ,this.exportForIos);
urlSearchParams.append('BuildInfo.ExportForWebGl' ,this.exportForWebGl);

//SceneInfo
urlSearchParams.append('SceneInfo.HeightMapFile',this.sceneHeightMapFile);
urlSearchParams.append('SceneInfo.TextureTileSizeY',this.textureTileSizeY);
urlSearchParams.append('SceneInfo.TextureTileSizeX',this.textureTileSizeX);

//PlayerInfo
urlSearchParams.append('PlayerInfo.VR' ,this.VR);
urlSearchParams.append('PlayerInfo.PrefabName' ,this.playerPrefabName);
urlSearchParams.append('PlayerInfo.PositionIndex' ,this.playerPositionIndex);
urlSearchParams.append('PlayerInfo.Power.Leg' ,this.playerPowerLeg);
urlSearchParams.append('PlayerInfo.Power.Body' ,this.playerPowerBody);
urlSearchParams.append('PlayerInfo.Power.Head' ,this.playerPowerHead);

//GunInfo
urlSearchParams.append('GunInfo.ModelFile' ,this.gunModelFile);
urlSearchParams.append('GunInfo.TextureFile' ,this.gunTextureFile);
urlSearchParams.append('GunInfo.HeightmapFile' ,this.gunHeightmapFile);
urlSearchParams.append('GunInfo.FireAnimationFile' ,this.fireAnimationFile);
urlSearchParams.append('GunInfo.RecoilAnimationFile' ,this.recoilAnimationFile);
urlSearchParams.append('GunInfo.FireSoundFile' ,this.fireSoundFile);
urlSearchParams.append('GunInfo.RecoilSoundFile' ,this.recoilSoundFile);
urlSearchParams.append('GunInfo.Range' ,this.range);
urlSearchParams.append('GunInfo.MaxAngle' ,this.maxAngle);
urlSearchParams.append('GunInfo.ZoomScope' ,this.zoomScope);
urlSearchParams.append('GunInfo.ReloadTime' ,this.reloadTime);
urlSearchParams.append('GunInfo.MagSize' ,this.magSize);

for(var i=0;i<this.enemies.length;i++){
  urlSearchParams.append('GunInfo.MagSize' ,this.enemies[i].Index);
} 
//Template-Enemies


let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
headers.append('Access-Control-Allow-Origin' ,'*');
headers.append('Access-Control-Allow-Headers','Origin, Content-Type, X-Auth-Token');
let options = new RequestOptions({ headers: headers });


let body = urlSearchParams.toString()

    this.http.post('https://requestb.in/rt5qcxrt',body,options)
    .subscribe((result) => {
      console.log(result, 'Result reached')
    }, (err) => {
      console.log(err, 'Error reached');
    });
  }
  generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

addEnemies(){

  this.guid =this.generateGuid();
const enemy : Enemies={
  Index: this.guid,
  ModelFile:this.someURL,
  TextureFile:this.someURL,
  HeightmapFile:this.someURL,
  RouteIndex:this.someURL,
  RunAnimationFile:this.someURL,
  WalkAnimationFile:this.someURL,
  FallAnimationFile:this.someURL,
  Leg:140,
  Body:450,
  Head:1300 
}
this.enemies.push(enemy);

}

addNpcs(){
  this.guid =this.generateGuid();
  const npc : Npcs={
    Index: this.guid,
    ModelFile:this.someURL,
    TextureFile:this.someURL,
    HeightmapFile:this.someURL,
    RouteIndex:this.someURL,
    RunAnimationFile:this.someURL,
    WalkAnimationFile:this.someURL,
    FallAnimationFile:this.someURL,
    Leg:140,
    Body:450,
    Head:1300 
  }
  this.npcs.push(npc);
  
}

}
