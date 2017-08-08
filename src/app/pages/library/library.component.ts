import { AfterViewChecked, Component } from '@angular/core';
import * as $ from 'jquery';
import * as firebase from 'firebase';
import { GlobalRef } from '../../global-ref';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements AfterViewChecked {
  animations: any;

  constructor(private glob: GlobalRef) {
  }

  ngAfterViewChecked() {
    const wnd = this.glob.nativeGlobal;
    $(document).ready(function () {
      setTimeout(loadPage, 1500);
    });

    function loadPage() {
      if (firebase.auth().currentUser) {
        let blocks = '';
        let animationsArray: Array<{}> | void = [];
        let k = 1;
        const userId = firebase.auth().currentUser.uid;
        firebase.database().ref('usernames').child(userId).child('mylibrary').orderByValue().once('value', function (ss) {
          const items = ss.val();
          if (!items) {
            alert('No items in library');
          } else {
            animationsArray = Object.keys(items)
              .filter(key => !items[key].terrain)
              .map(function (key) {
              console.log(items)
              const item = items[key];
              item.firebaseKey = key;

              const storageBucket = (firebase.app().options as any).storageBucket;
              const animMp4Name = 'mp4Files/' + item.name + '.mp4';
              const mp4Url = `https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/${encodeURIComponent(animMp4Name)}?alt=media`;

              const animFileName = 'animFiles/' + item.name + '.anim';
              const animFileUrl = `https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/${encodeURIComponent(animFileName)}?alt=media`;

              item.mp4Url = mp4Url;
              item.animUrl = animFileUrl;

              return item;
            }).forEach(function (anim) {
              blocks += '<div class="box-video box' + k + ' fadeInUp clust col-xs-2">';
              blocks += '<div style="z-index: 111;">';
              blocks += '<div class="animation-name" style="text-align:center;margin-top:40px;display:block">' + anim.name + '</div>';
              blocks += '<a class="download-anim" href="' + anim.animUrl + '" data-url="' + anim.animUrl + '" data-duration="' + anim.duration + '" data-name="' + anim.name + '.anim" style="float:none !important;text-align:center;display:block;margin-top:0px"><br/><i class="fa fa-download fa-2x" aria-hidden="true"></i></a></center>';
              blocks += '<label class="fancy-checkbox library-checkbox">';
              blocks += '<input  type="checkbox" name="' + anim.firebaseKey + '" click="if(this.checked){ document.getElementById(' + k + ').checked = true;} else {document.getElementById(' + k + ').checked = false;}"/>';
              blocks += '</label>';
              blocks += '</div>';
              // blocks += '<label class="fancy-checkbox">';
              // blocks += '<input type="checkbox" name="' + anim.firebaseKey + '" id="' + k + '"/>';
              blocks += '<video class="anim-video" autoplay loop muted>';
              blocks += '<source src="' + anim.mp4Url + '" type="video/mp4" />';
              blocks += '</video>';
              blocks += '</div>';
              k++;
            });
            Object.keys(items)
              .filter(key => !!items[key].terrain)
              .map(terrain => {
                return {
                  terrain: items[terrain].terrain,
                  firebaseKey: terrain
                };
              })
              .forEach(item => {
                blocks += '<div class="box-video box-image box' + k + ' fadeInUp clust col-xs-2">';
                blocks += '<div style="z-index: 111;">';
                blocks += '<a class="download-anim" href="' + item.terrain + '" data-url="' + item.terrain + '" style="float:none !important;text-align:center;display:block;margin-top:40px"><br/><i class="fa fa-download fa-2x" aria-hidden="true"></i></a></center>';
                blocks += '</div>';
                // blocks += '<label class="fancy-checkbox">';
                // blocks += '<input type="checkbox" name="' + anim.firebaseKey + '" id="' + k + '"/>';
                blocks += '<img class="terrain-image" src="' + item.terrain + '" />';
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
            setTimeout(() => {
              $('.terrain-image').each((i, el) => {
                $(el).height($($('.anim-video')[0]).height());
              });
              $('.box-image').each((i, el) => {
                $(el).height($($('.box-video')[0]).height());
              });
            }, 500);
          }
        });
      } else {
        // ($('#myModal') as any).modal({
        //   backdrop: 'static',
        //   keyboard: false,
        //   show: true
        // });
        $('.zodiacCont').show();
        $('.temp_margin').hide();
      }
    }
    wnd.deleteSelected = function () {
      $('.fancy-checkbox input').each(function () {
        const input = $(this);
        if (input.is(':checked')) {
          const userId = firebase.auth().currentUser.uid;
          const imageKey = input.prop('name');
          firebase.database().ref('usernames').child(userId).child('mylibrary').child(imageKey).remove();
          input.parent().parent().parent().remove();
        }
      });
    }
  }

}
