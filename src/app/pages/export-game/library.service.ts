import { Injectable } from '@angular/core';
import { Observable,Observer } from 'rxjs';
import {
  GlobalRef
} from '../../global-ref';
import {  AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs'
@Injectable()
export class LibraryService {

  private currentUser:BehaviorSubject<any>;
  constructor(private firedb:AngularFireDatabase,private fireauth:AngularFireAuth) {

      this.currentUser=new BehaviorSubject<any>(firebase.auth().currentUser);
      firebase.auth().onAuthStateChanged(user=>{
        
                 // if(user)
                    this.currentUser.next(user);
        
        
                 });
         

   }


   isLoggedIn(){
     return this.currentUser;
   }

  
  isReady():Observable<any>{
    
    return new Observable((observer:Observer<any>)=>{


         firebase.auth().onAuthStateChanged(user=>{

          if(user)
            observer.next(user);


         });
    });
    

  }  
  getCharModels(){

    if(firebase.auth().currentUser.uid){
    return this.firedb.list(`usernames/${firebase.auth().currentUser.uid}/gameLibrary/charModels`);
    }else{
      console.log("current user is null")
      return Observable.of([]);
    }
  }

  
  getGunModels(){
    
        if(firebase.auth().currentUser.uid){
        return this.firedb.list(`usernames/${firebase.auth().currentUser.uid}/gameLibrary/gunModels`);
        }else{
          console.log("current user is null")
          return Observable.of([]);
        }
      }
  
  getTerrainModels(){

    if(firebase.auth().currentUser.uid)
   { return this.firedb.list(`usernames/${firebase.auth().currentUser.uid}/gameLibrary/terrainModels`);
}else{
     console.log("current user is null");
     console.log(firebase.auth().currentUser);
    console.log(firebase.auth());   
      return Observable.of([]);
    }
  }
}
