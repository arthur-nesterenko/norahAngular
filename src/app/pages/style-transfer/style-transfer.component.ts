import { AfterViewInit, Component } from '@angular/core';
import * as firebase from 'firebase';
import $ from 'jquery/dist/jquery';
import { GlobalRef } from '../../global-ref';

@Component({
  selector: 'app-style-transfer',
  templateUrl: './style-transfer.component.html',
  styleUrls: ['./style-transfer.component.scss']
})
export class StyleTransferComponent implements AfterViewInit {
  root = 1;

  constructor(private global: GlobalRef) {
  
  }

  ngAfterViewInit() {
    let gameInstance;
    const wnd = this.global.nativeGlobal;
    const animationArray = [];
    const left_array = [];
    const right_array = [];
    const left_displaynames_array = [];
    const right_displaynames_array = [];
    const left_duration_array = [];
    const right_duration_array = [];
    let current_left;
    let current_right;
    wnd.yamllibrary = [];
    wnd.mp4library = [];
    $('#animation_name').on('keypress', (event) => {
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.cancelBubble = true;
      window.removeEventListener('keypress');
    });
    $(window).off('keypress');
    const yamlUrls = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/aggressive+look.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/backflip.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/block.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/casual+conversation.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/chicken+dance.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/dancing.anim'];
    const yamlUrls_left = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/chicken+dance.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/deep+breathing.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/fighting.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/playing+guitar.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/standing+idle1.anim'];
    const yamlUrls_right = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/backflip.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/block.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/dancing.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/flying+kick.anim', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/kick.anim'];
    const mp4Urls_left = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/chicken+dance.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/deep+breathing.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/fighting.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/playing+guitar.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/standing+idle1.mp4'];
    const mp4Urls_right = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/backflip.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/block.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/dancing.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/flying+kick.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/kick.mp4'];
    const mp4Urls = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/aggressive+look.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/backflip.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/block.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/casual+conversation.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/chicken+dance.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/dancing.mp4'];

    // Engine loading is finished, we can call animations loading method...
    function sorter(inputNames, inputDurations, inputDisplayNames) {
      const names = inputNames;
      const displayNames = inputDisplayNames;
      const durations = inputDurations;

      const animations = names;
      if (names.length === 0) {
        alert('No items in library');
        // $.unblockUI();
      }
      console.log('Length of Animations' + names.length);
      const half_length = Math.ceil(names.length) / 2;
      console.log('Mod ' + half_length);
      let count = 0;
      for (const i in names) {
        ++count;
        if (animations.hasOwnProperty(i) && typeof(i) !== 'function') {
          animationArray.push(names[i]);
          right_array.push(names[i]);
          left_array.push(names[i]);
          right_displaynames_array.push(displayNames[i]);
          right_duration_array.push(durations[i]);
          left_displaynames_array.push(displayNames[i]);
          left_duration_array.push(durations[i]);
          // if (count <= half_length) {
          //   right_array.push(names[i]);
            
          //   console.log('gone right ' + names[i]);
            
          //   console.log('right duration ' + durations[i]);
          // } else {
          //   left_array.push(names[i]);
            
          //   console.log('gone left ' + names[i]);
            
          //   console.log('left duration ' + durations[i]);
          // }
        }
      }


      console.log('animationArray');
      console.log(animationArray);
      console.log('left_array: ');
      console.log(left_array);
      console.log(left_duration_array);
      console.log('right_array: ');
      console.log(right_array);
      console.log(right_duration_array);

      // Right
      firebase.storage().ref('yamlFiles').child(right_array[0] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
        firebase.storage().ref('mp4Files').child(right_array[0] + '.mp4').getDownloadURL().then(function (downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
  
          gameInstance.SendMessage('ControllerHelper', 'ExecuteStartFromOutside', animDownloadUrl + '|' + animDownloadUrl);

          (document.getElementById('right_anim_name') as any).value = animDownloadUrl;
          document.getElementById('right_anim_title').innerHTML = right_displaynames_array[0];


          PlayRightAnimation(downloadUrl, right_displaynames_array[0], right_duration_array[0]);
        });
      });
      // Left
      firebase.storage().ref('yamlFiles').child(left_array[0] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
        firebase.storage().ref('mp4Files').child(left_array[0] + '.mp4').getDownloadURL().then(function (downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
          gameInstance.SendMessage('ControllerHelper', 'ExecuteStartFromOutside', animDownloadUrl + '|' + animDownloadUrl);

          (document.getElementById('left_anim_name') as any).value = animDownloadUrl;
          document.getElementById('left_anim_title').innerHTML = left_displaynames_array[0];

          PlayLeftAnimation(downloadUrl, left_displaynames_array[0], left_duration_array[0]);
        });
      });

    }

    let childrenCount;
    let semaphore = false;

    wnd.UnityLoadFinished = function () {
      getList();
    };

    function getList() {
      let count = 0;
      const userId = firebase.auth().currentUser.uid;
      const names = [];
      const displayNames = [];
      const durations = [];
      firebase.database().ref('usernames').child(userId).child('mylibrary').orderByChild('duration').on('child_added', function (snapshot) {
        ++count;
        console.log(snapshot.val());
        console.log('Anim was ' + snapshot.val().duration + ' seconds long');
        durations.push(snapshot.val().duration);
        names.push(snapshot.val().name);
        displayNames.push(snapshot.val().displayName);
        if (count === childrenCount) {
          for (const i in names) {
            console.log(names[i] + ' ' + durations[i]);
          }
          sorter(names, durations, displayNames);
        }
      });

    }

    function PlayLeftAnimation(url, title, duration) {
      const player: any = document.getElementById('left_animation_mp4');
      const mp4Vid: any = document.getElementById('left_animation_mp4_src');
      document.getElementById('left_anim_title').innerHTML = title;
      document.getElementById('left_anim_duration').innerHTML = 'Clip length: ' + duration + 's';
      player.pause();
      mp4Vid.src = url;
      player.load();
      player.play();
    }

    function PlayRightAnimation(url, title, duration) {
      const player: any = document.getElementById('right_animation_mp4');
      const mp4Vid: any = document.getElementById('right_animation_mp4_src');
      document.getElementById('right_anim_title').innerHTML = title;
      document.getElementById('right_anim_duration').innerHTML = 'Clip length: ' + duration + 's';
      player.pause();
      mp4Vid.src = url;
      player.load();
      player.play();
    }

    function PlayAnimations() {

      console.log('Inside PlayAnimations');
      console.log('current_left: ', current_left);
      console.log('current_right: ', current_right);

      //Play left
      let player: any = document.getElementById('left_animation_mp4');
      let mp4Vid: any = document.getElementById('left_animation_mp4_src');
      player.pause();
      mp4Vid.src = mp4Urls_left[current_left];

      player.load();
      player.play();

      //Play Right
      player = document.getElementById('right_animation_mp4');
      mp4Vid = document.getElementById('right_animation_mp4_src');
      player.pause();
      mp4Vid.src = mp4Urls_right[current_right];
      player.load();
      player.play();
    }

    wnd.ApplyLeftAnim = function (direction) {
      console.log(animationArray);
      console.log('left_array: ');
      console.log(left_array);
      console.log(current_left);
      console.log(direction);
      const len = left_array.length;
      current_left = current_left + direction;
      if (current_left >= len) {
        current_left = 0;
      }
      if (current_left < 0) {
        current_left = len - 1;
      }
      console.log(left_array[current_left]);
      firebase.storage().ref('yamlFiles').child(left_array[current_left] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
        firebase.storage().ref('mp4Files').child(left_array[current_left] + '.mp4').getDownloadURL().then(function (downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
          gameInstance.SendMessage('ControllerHelper', 'LoadAnimFromManager', animDownloadUrl + '|' + '0');
          (document.getElementById('left_anim_name') as any).value = animDownloadUrl;
          (document.getElementById('right_anim_name') as any).value = animDownloadUrl;
          PlayLeftAnimation(downloadUrl, left_displaynames_array[current_left], left_duration_array[current_left]);
        });
      });
      //PlayAnimations();
      (document.getElementById('left_anim_name') as any).value = left_array[current_left];
      document.getElementById('left_anim_duration').innerHTML = left_duration_array[current_left];
    };

    wnd.ApplyRightAnim = function (direction) {
      console.log(animationArray);
      console.log(current_right);
      console.log(direction);
      console.log('right_array: ');
      console.log(right_array);
      const len = right_array.length;
      current_right = current_right + direction;

      if (current_right >= len) {
        current_right = 0;
      }
      if (current_right < 0) {
        current_right = len - 1;
      }
      console.log(right_array[current_right]);

      firebase.storage().ref('yamlFiles').child(right_array[current_right] + '.anim').getDownloadURL().then(function (animDownloadUrl) {
        firebase.storage().ref('mp4Files').child(right_array[current_right] + '.mp4').getDownloadURL().then(function (downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
          gameInstance.SendMessage('ControllerHelper', 'LoadAnimFromManager', animDownloadUrl + '|' + '1');
          (document.getElementById('left_anim_name') as any).value = animDownloadUrl;
          (document.getElementById('right_anim_name') as any).value = animDownloadUrl;
          PlayRightAnimation(downloadUrl, right_displaynames_array[current_right], right_duration_array[current_right]);

        });
      });
      //PlayAnimations();
      (document.getElementById('right_anim_name') as any).value = right_array[current_right];
      document.getElementById('right_anim_duration').innerHTML = right_duration_array[current_right];
    };

    function saveToFirebase() {
      // Collect the values from form.
      const objectToSave = {
        name: $('#animation_name').val(),
        blending_options: {
          loop: $('input[name=\'Loop\']').is(':checked'),
          timeStretch: $('input[name=\'TimeStretch\']').is(':checked'),
          startOffs: $('input[name=\'StartOffs\']').val()
        },
        blending_tools: {
          head: $('input[name=\'Head\']').val(),
          trso: $('input[name=\'Trso\']').val(),
          armL: $('input[name=\'ArmL\']').val(),
          armR: $('input[name=\'ArmR\']').val(),
          legL: $('input[name=\'LegL\']').val(),
          legR: $('input[name=\'LegR\']').val(),
          fing: $('input[name=\'Fing\']').val(),
          root: $('input[name=\'Root\']').val()
        }
      };

      // Get the current user id.
      const userId = firebase.auth().currentUser.uid;

      // Get the reference to new object in firebase.
      const ref = firebase
        .database()
        .ref('usernames')
        .child(userId)
        .child('styletranfertool')
        .push();

      // Set the value for the newly created reference.
      ref.set(objectToSave);
    }

    wnd.downloadAnim = function () {
      saveToFirebase();
      const txt: any = document.getElementById('animation_name');
      const animName = txt.value;
      gameInstance.SendMessage('ControllerHelper', 'ExportFromOutside', animName);
    };

    wnd.saveAnim = function () {

      const user = firebase.auth().currentUser;
      // Collect the values from form.
      const objectToSave = {
        user: {
          mail: user.email,
          uid: user.uid,
          name: user.displayName
        },
        animUrl: 'Not available',
        styletranfertool: {
          name: $('#animation_name').val(),
          blending_options: {
            loop: $('input[name=\'Loop\']').is(':checked'),
            timeStretch: $('input[name=\'TimeStretch\']').is(':checked'),
            startOffs: $('input[name=\'StartOffs\']').val()
          },
          blending_tools: {
            head: $('input[name=\'Head\']').val(),
            trso: $('input[name=\'Trso\']').val(),
            armL: $('input[name=\'ArmL\']').val(),
            armR: $('input[name=\'ArmR\']').val(),
            legL: $('input[name=\'LegL\']').val(),
            legR: $('input[name=\'LegR\']').val(),
            fing: $('input[name=\'Fing\']').val(),
            root: $('input[name=\'Root\']').val()
          },
          leftAnimation: {
            name: left_displaynames_array[current_left],
            duration: left_duration_array[current_left],
            file: left_array[current_left]
          },
          rightAnimation: {

            name: right_displaynames_array[current_right],
            duration: right_duration_array[current_right],
            file: right_array[current_right]

          }
        },
        created: new Date().toLocaleDateString()
      };

      // Get the current user id.
      const userId = firebase.auth().currentUser.uid;
      console.log(objectToSave);
      // Get the reference to new object in firebase.
      const ref = firebase
        .database()
        .ref('contests')
        .push();

      // Set the value for the newly created reference.
      try {
        ref.set(objectToSave);
        alert('Anim: ' + objectToSave.styletranfertool.name + ' has been saved to firebase');

      } catch (e) {
        alert('Failed to save the anim..!' + e);
      }


    };


    wnd.handleClick = function (cb) {
      var id = cb.getAttribute('id');
      if (id === 'loop')
        gameInstance.SendMessage('ControllerHelper', 'SetLoop', cb.checked.toString());
      if (id === 'timestretch')
        gameInstance.SendMessage('ControllerHelper', 'SetTimeStretch', cb.checked.toString());
    };

    const rangeSlider = function () {
      const slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

      slider.each(function () {

        value.each(function () {
          const val = $(this).prev().attr('value');
          console.log(value);
          $(this).html(val);
        });

        range.on('input', function () {
          const name = $(this).attr('name');
          gameInstance.SendMessage('ControllerHelper', 'SetSliderValue', name + '|' + this.value);
          $(this).next(value).html(this.value);
        });
      });
    };
    rangeSlider();

    $(document).ready(function () {
      current_left = 0;
      current_right = 0;
      firebase.auth().onAuthStateChanged(state => {
        if (state.uid) {
          loadPage();
        }
      });
    });

    function loadPage() {
      if (firebase.auth().currentUser) {
        console.log('Auth');
        const userId = firebase.auth().currentUser.uid;
        let ss = [];
        firebase.database().ref('usernames')
          .child(userId)
          .child('mylibrary')
          .orderByChild('duration')
          .once('value')
          .then(function (snapshot) {
            ss = snapshot.val();
            console.log('Number of children ' + snapshot.numChildren());
            childrenCount = snapshot.numChildren();
            semaphore = true;
            if (childrenCount < 2) {
              alert('Add atleast 2 animations from the Repository');
            } else {
              gameInstance = UnityLoader.instantiate('gameContainer', 'assets/other/WebBuild.json');
            }
          });
      } else {
        console.log('Not logged in');
        $('#myModal').modal({
          backdrop: 'static',
          keyboard: false,
          show: true
        });
      }
    }
  }

}
