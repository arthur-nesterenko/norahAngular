import { AfterViewInit, Component } from '@angular/core';
import * as firebase from 'firebase';
import $ from 'jquery/dist/jquery';
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
    let gameInstance;

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

    const animations_library = [];

    function loadPage() {
      if (firebase.auth().currentUser) {
        gameInstance = UnityLoader.instantiate('gameContainer', 'assets/other/Build22(With External Call to [LoadFinished]).json', {
          onProgress: UnityProgress
        });
        console.log('Auth');

      } else {
        console.log('Not Auth');
        $('#myModal').modal({
          backdrop: 'static',
          keyboard: false,
          show: true
        });
      }
    }
    wnd.LoadFinished = function () {
      console.log('Unity Loading Finished');
      const userId = firebase.auth().currentUser.uid;
      firebase.database().ref('usernames').child(userId).child('mylibrary').once('value', function (ss) {
        const animations = ss.val();
        if (!animations) {
          alert('No items in library');
        }
        Object.keys(animations).forEach(function (animKey) {
          console.log(animations[animKey].name);
          animations_library.push(animations[animKey].name);

          firebase.storage().ref('jsonFiles').child(animations[animKey].name + '.json').getDownloadURL().then(function (downloadUrl) {
            console.log(downloadUrl);
            console.log(typeof(downloadUrl));
            $('#anim_url').attr('value', downloadUrl);
            gameInstance.SendMessage('RTClipEditor', 'LoadAnimFromUrl', downloadUrl);
          });
        });
        // $.unblockUI();
      });
    };
    function loadAnimFromUrl(url) {
      console.log('Inside loadAnimFromUrl');
      console.log(url);
      $('#anim_url').attr('value', url);
      gameInstance.SendMessage('RTClipEditor', 'LoadAnimFromUrl', url);
    }
  }

}
