import { AfterViewInit, Component } from '@angular/core';
import * as firebase from 'firebase';
import $  from 'jquery/dist/jquery';
import { GlobalRef } from '../../global-ref';

@Component({
  selector: 'app-style-transfer',
  templateUrl: './style-transfer.component.html',
  styleUrls: ['./style-transfer.component.scss']
})
export class StyleTransferComponent implements AfterViewInit {
  root = 1;

  constructor(private global: GlobalRef) { }

  ngAfterViewInit() {
    const wnd = this.global.nativeGlobal;
    let animationArray = [];
    let left_array = [];
    let right_array = [];
    let current_left;
    let current_right;
    wnd.yamllibrary = [];
    wnd.mp4library = [];
    let player;
    let mp4Vid;
    let yamlUrls = ["http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/aggressive+look.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/backflip.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/block.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/casual+conversation.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/chicken+dance.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/dancing.anim"];
    let yamlUrls_left = ["http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/chicken+dance.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/deep+breathing.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/fighting.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/playing+guitar.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/big/standing+idle1.anim"];
    let yamlUrls_right = ["http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/backflip.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/block.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/dancing.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/flying+kick.anim", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/yaml/small/kick.anim"];
    let mp4Urls_left = ["http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/chicken+dance.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/deep+breathing.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/fighting.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/playing+guitar.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/big/standing+idle1.mp4"];
    let mp4Urls_right = ["http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/backflip.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/block.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/dancing.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/flying+kick.mp4", "http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/small/kick.mp4"];
    let mp4Urls = ['http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/aggressive+look.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/backflip.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/block.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/casual+conversation.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/chicken+dance.mp4', 'http://s3-ap-southeast-1.amazonaws.com/norah.absentia/mp4/dancing.mp4'];

    // Engine loading is finished, we can call animations loading method...
    function sorter(inputNames, inputDurations) {
      let names = inputNames;
      let durations = inputDurations;
      // console.log(inputNames);
      for (let i in names) {
        console.log(names[i] + " " + durations[i]);

      }

      let ss;

      let animations = names;
      if (names.length == 0) {
        alert("No items in library");
        // $.unblockUI();
      }
      console.log("Length of Animations" + names.length);
      let half_length = Math.ceil(names.length) / 2;
      console.log("Mod " + half_length);
      let count = 0;
      for (let i in names) {
        ++count;
        if (animations.hasOwnProperty(i) && typeof(i) !== 'function') {
          animationArray.push(names[i]);
          if (count <= half_length) {
            right_array.push(names[i]);
            console.log("gone right " + names[i]);
            console.log("right duration " + durations[i]);
          } else {
            left_array.push(names[i]);
            console.log("gone left " + names[i]);
            console.log("left duration " + durations[i]);
          }
        }
      }


      console.log("animationArray");
      console.log("left_array: ");
      console.log(left_array);
      console.log("right_array: ");
      console.log(right_array);
      firebase.storage().ref("yamlFiles").child(animationArray[0] + ".anim").getDownloadURL().then(function(animDownloadUrl) {
        firebase.storage().ref("mp4Files").child(animationArray[0] + ".mp4").getDownloadURL().then(function(downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
          gameInstance.SendMessage('ControllerHelper', 'ExecuteStartFromOutside', animDownloadUrl + "|" + animDownloadUrl);
          (document.getElementById('left_anim_name') as any).value = animDownloadUrl;
          (document.getElementById('right_anim_name') as any).value = animDownloadUrl;
          PlayLeftAnimation(downloadUrl);
          PlayRightAnimation(downloadUrl);
        })
      });

    }
    let childrenCount;
    let semaphore = false;

    wnd.UnityLoadFinished = function() {


      let userId = firebase.auth().currentUser.uid;



      let ss = [];
      let ref = firebase.database().ref("usernames").child(userId).child("mylibrary").orderByChild("duration").once("value").then(function(snapshot) {
        ss = snapshot.val();
        console.log("Number of children " + snapshot.numChildren());
        childrenCount = snapshot.numChildren();
        semaphore = true;
        if (childrenCount < 2) {
          alert("Add atleast 2 animations from the Repository");
        } else {
          getList();
        }
      });
    }

    function getList() {
      let count = 0;
      let userId = firebase.auth().currentUser.uid;
      let names = [];
      let durations = [];
      let ref = firebase.database().ref("usernames").child(userId).child("mylibrary").orderByChild("duration").on("child_added", function(snapshot) {
        ++count;
        console.log(snapshot.val());
        console.log("Anim was " + snapshot.val().duration + " seconds long");
        durations.push(snapshot.val().duration);
        names.push(snapshot.val().name);
        if (count == childrenCount) {

          for (let i in names) {
            console.log(names[i] + " " + durations[i]);

          }
          sorter(names, durations);


        }
      });

    }


    function PlayLeftAnimation(url) {
      player = (document.getElementById('left_animation_mp4') as any);
      mp4Vid = (document.getElementById('left_animation_mp4_src') as any);
      player.pause();
      mp4Vid.src = url;

      player.load();
      player.play();


    }

    function PlayRightAnimation(url) {
      player = (document.getElementById('right_animation_mp4') as any);
      mp4Vid = (document.getElementById('right_animation_mp4_src') as any);
      player.pause();
      mp4Vid.src = url;
      player.load();
      player.play();
    }

    function PlayAnimations() {

      console.log("Inside PlayAnimations");
      console.log("current_left: ", current_left);
      console.log("current_right: ", current_right);

      //Play left
      player = (document.getElementById('left_animation_mp4') as any);
      mp4Vid = (document.getElementById('left_animation_mp4_src') as any);
      player.pause();
      mp4Vid.src = mp4Urls_left[current_left];

      player.load();
      player.play();

      //Play Right
      player = (document.getElementById('right_animation_mp4') as any);
      mp4Vid = (document.getElementById('right_animation_mp4_src') as any);
      player.pause();
      mp4Vid.src = mp4Urls_right[current_right];
      player.load();
      player.play();

    }

    function ApplyLeftAnim(direction) {
      console.log(animationArray);
      console.log("left_array: ");
      console.log(left_array);

      console.log(current_left);
      console.log(direction);
      let len = left_array.length;
      current_left = current_left + direction;
      if (current_left >= len) {
        current_left = 0;
      }
      if (current_left < 0) {
        current_left = len - 1;
      }
      console.log(left_array[current_left]);


      firebase.storage().ref("yamlFiles").child(left_array[current_left] + ".anim").getDownloadURL().then(function(animDownloadUrl) {
        firebase.storage().ref("mp4Files").child(left_array[current_left] + ".mp4").getDownloadURL().then(function(downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
          gameInstance.SendMessage('ControllerHelper', 'LoadAnimFromManager', animDownloadUrl + "|" + "0");
          (document.getElementById('left_anim_name') as any).value = animDownloadUrl;
          (document.getElementById('right_anim_name') as any).value = animDownloadUrl;
          PlayLeftAnimation(downloadUrl);



        })
      });


      //PlayAnimations();
      (document.getElementById('left_anim_name') as any).value = left_array[current_left];

      //PlayAnimations();
    }

    function ApplyRightAnim(direction) {
      console.log(animationArray);
      console.log(current_right);
      console.log(direction);

      console.log("right_array: ");
      console.log(right_array);

      let len = right_array.length;
      current_right = current_right + direction;
      if (current_right >= len) {
        current_right = 0;
      }
      if (current_right < 0) {
        current_right = len - 1;
      }
      console.log(right_array[current_right]);

      firebase.storage().ref("yamlFiles").child(right_array[current_right] + ".anim").getDownloadURL().then(function(animDownloadUrl) {
        firebase.storage().ref("mp4Files").child(right_array[current_right] + ".mp4").getDownloadURL().then(function(downloadUrl) {
          console.log(animDownloadUrl);
          console.log(downloadUrl);
          gameInstance.SendMessage('ControllerHelper', 'LoadAnimFromManager', animDownloadUrl + "|" + "1");
          (document.getElementById('left_anim_name') as any).value = animDownloadUrl;
          (document.getElementById('right_anim_name') as any).value = animDownloadUrl;
          PlayRightAnimation(downloadUrl);



        })
      });


      //PlayAnimations();
      (document.getElementById('right_anim_name') as any).value = right_array[current_right];

      //PlayAnimations();

    }

    wnd.downloadAnim = function () {
      let txt = (document.getElementById("animation_name") as any);
      let animName = txt.value;
      gameInstance.SendMessage('ControllerHelper', 'ExportFromOutside', animName);
    }

    function handleClick(cb) {
      let name = cb.getAttribute('name');
      if (name == 'Loop')
        gameInstance.SendMessage('ControllerHelper', 'SetLoop', cb.checked.toString());
      if (name == 'TimeStretch')
        gameInstance.SendMessage('ControllerHelper', 'SetTimeStretch', cb.checked.toString());
    }

    let rangeSlider = function() {
      let slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');

      slider.each(function() {

        value.each(function() {
          let value = $(this).prev().attr('value');
          console.log(value);
          $(this).html(value);
        });

        range.on('input', function() {
          let name = $(this).attr('name');
          gameInstance.SendMessage('ControllerHelper', 'SetSliderValue', name + '|' + this.value);
          $(this).next(value).html(this.value);
        });
      });
    };

    rangeSlider();

    $(document).ready(function() {
      current_left = 0;
      current_right = 0;

      setTimeout(loadPage, 1500);
    });

    /*let downloadUrls = [];
     let animations_library = [];
     let current_left = "";
     let current_right = "";*/
    function loadPage() {

      if (firebase.auth().currentUser) {
        console.log("Auth");


      } else {
        console.log("Not logged in");
        $('#myModal').modal({
          backdrop: "static",
          keyboard: false,
          show: true
        });
      }
    }


    let gameInstance = UnityLoader.instantiate("gameContainer", "/assets/other/WebBuild.json");
  }

}
