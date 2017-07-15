import { AfterViewInit, Component } from '@angular/core';
import * as firebase from 'firebase';
import $  from 'jquery/dist/jquery';
import { GlobalRef } from '../../global-ref';


@Component({
  selector: 'app-motion-editor',
  templateUrl: './motion-editor.component.html',
  styleUrls: ['./motion-editor.component.scss', '../../../assets/css/poseeditor.css']
})
export class MotionEditorComponent implements AfterViewInit {

  constructor(private global: GlobalRef) { }

  ngAfterViewInit() {
    const wnd = this.global.nativeGlobal;
    let gameInstance = wnd.UnityLoader.instantiate("gameContainer", "/assets/other/Build 20 (Fixed).json", {
      onProgress: wnd.UnityProgress
    });

    function logout() {
      firebase.auth().signOut().then(function() {
        console.log('Signed Out');
      }, function(error) {
        console.error('Sign Out Error', error);
      });
      location.reload();
    }
    $(document).ready(function() {
      setTimeout(loadPage, 1500);
    });

    let animations_library = [];

    function loadAnimFromUrl(url) {
      console.log("Inside loadAnimFromUrl");
      console.log(url);
      $("#anim_url").attr("value", url);
      (document.getElementById('anim_url') as any).value = url;
      gameInstance.SendMessage('RTClipEditor', 'LoadAnimFromUrl', url);
    }

    function loadPage() {
      if (firebase.auth().currentUser) {
        // document.write('<script src="TemplateData/UnityProgress.js">\x3C/script>');
        // document.write('<script src="BuildPose/UnityLoader.js">\x3C/script>');
        // let gameInstance = UnityLoader.instantiate("gameContainer", "BuildPose/Build 17 (Production Release).json", {
        //     onProgress: UnityProgress
        // });
        console.log("Auth");
        //$.blockUI();
        let userId = firebase.auth().currentUser.uid;
        firebase.database().ref("usernames").child(userId).child("mylibrary").once("value", function(ss) {
          let animations = ss.val();
          if (!animations) {
            alert("No items in library");
            //$.unblockUI();
          }
          animations && Object.keys(animations).forEach(function(animKey) {
            console.log(animations[animKey].name);
            animations_library.push(animations[animKey].name);

            firebase.storage().ref("jsonFiles").child(animations[animKey].name + ".json").getDownloadURL().then(function(downloadUrl) {
              console.log(downloadUrl);
              //downloadUrls.push(downloadUrl);
              console.log(typeof(downloadUrl));
              $("#anim_url").attr("value", downloadUrl);
              //document.getElementById('anim_url').value = downloadUrl;
              console.log(downloadUrl);
              gameInstance.SendMessage('RTClipEditor', 'LoadAnimFromUrl', downloadUrl);
              //loadAnimFromUrl(downloadUrl);
            });
          });
          // $.unblockUI();
        })
      } else {
        console.log("Not Auth");
        $('#myModal').modal({
          backdrop: "static",
          keyboard: false,
          show: true
        });
      }
    }
  }

}
