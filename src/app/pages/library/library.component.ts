import { AfterViewInit, Component } from '@angular/core';
import * as $ from 'jquery';
import * as firebase from 'firebase'

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    $(document).ready(function () {
      setTimeout(loadPage, 1500);
    });

    function loadPage() {
      if (firebase.auth().currentUser) {
        let blocks = '';
        let animationsArray: Array<{}> | void = [];
        let k = 1;
        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref('usernames').child(userId).child('mylibrary').once('value', function (ss) {
          const animations = ss.val();
          if (!animations) {
            alert('No items in library');
          } else {
            animationsArray = Object.keys(animations).map(function (key) {
              console.log(animations)
              const anim = animations[key];

              anim.firebaseKey = key;

              const storageBucket = (firebase.app().options as any).storageBucket;
              const animMp4Name = 'mp4Files/' + anim.name + '.mp4';
              const mp4Url = `https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/${encodeURIComponent(animMp4Name)}?alt=media`;

              const animFileName = 'animFiles/' + anim.name + '.anim';
              const animFileUrl = `https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/${encodeURIComponent(animFileName)}?alt=media`;

              anim.mp4Url = mp4Url;
              anim.animUrl = animFileUrl;

              return anim;
            }).sort(function (anim1, anim2) {
              return (anim1['displayName']).localeCompare(anim2['displayName']);
            }).forEach(function (anim) {
              blocks += '<div class="box-video box' + k + ' fadeInUp clust" data-wow-delay="0.3s" data-page="#">';
              blocks += '<div style="z-index: 111;">';
              blocks += '<div class="animation-name" style="text-align:center;margin-top:40px;display:block">' + anim.displayName + '</div>';
              blocks += '<a class="download-anim" target="_blank" href="' + anim.mp4Url + '" data-url="' + anim.animUrl + '" data-duration="' + anim.duration + '" data-name="' + anim.name + '.anim" style="float:none !important;text-align:center;display:block;margin-top:0px"><br/><i class="fa fa-download fa-2x" aria-hidden="true"></i></a></center>';
              blocks += '<label class="fancy-checkbox">';
              blocks += '<input type="checkbox" name="demo_' + anim.firebaseKey + '" click="if(this.checked){ document.getElementById(' + k + ').checked = true;} else {document.getElementById(' + k + ').checked = false;}"/>';
              blocks += '<span></span>';
              blocks += '</label>';
              blocks += '</div>';
              // blocks += '<label class="fancy-checkbox">';
              // blocks += '<input type="checkbox" name="' + anim.firebaseKey + '" id="' + k + '"/>';
              blocks += '<span></span>';
              blocks += '</label>';
              blocks += '<video autoplay loop muted>';
              blocks += '<source src="' + anim.mp4Url + '" type="video/mp4" />';
              blocks += '</video>';
              blocks += '</div>';
              k++;
            });

            $('.zodiacCont').html(blocks);
            $('.box').show();
            $('.zodiacCont').show();
            $('.temp_margin').hide();

            $('.download-anim').click(function () {
              const animDownloadUrl = $(this).data('url');
              $.ajax({
                url: animDownloadUrl,
              });
            });
          }
        });
      } else {
        $('#myModal').modal({
          backdrop: 'static',
          keyboard: false,
          show: true
        });
        $('.zodiacCont').show();
        $('.temp_margin').hide();
      }
    }

    function deleteSelected() {
      $('.fancy-checkbox input').each(function () {
        const input = $(this);
        if (input.is(':checked')) {
          const userId = firebase.auth().currentUser.uid;
          const imageKey = input.prop('name');
          firebase.database().ref('usernames').child(userId).child('mylibrary').child(imageKey).remove();
          input.parent().parent().remove();
        }
      });
    }
  }

}
