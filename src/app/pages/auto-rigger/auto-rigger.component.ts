import { AfterViewInit, Component } from '@angular/core';
import { GlobalRef } from '../../global-ref';

@Component({
  selector: 'app-auto-rigger',
  templateUrl: './auto-rigger.component.html',
  styleUrls: ['../../../assets/css/rigger_popup.css','./auto-rigger.component.scss']
})
export class AutoRiggerComponent implements AfterViewInit {



  constructor(private global: GlobalRef) { }

  ngAfterViewInit() {
    const wnd = this.global.nativeGlobal;
    const THREE: any = wnd.THREE;
    let webLoader = function() {
      function webLoader(elementToBindTo) {
        this.renderer = null;
        this.canvas = elementToBindTo;
        this.aspectRatio = 1;
        this.recalcAspectRatio();

        this.scene = null;
        this.cameraDefaults = {
          posCamera: new THREE.Vector3(0.0, 175.0, 500.0),
          posCameraTarget: new THREE.Vector3(0, 0, 0),
          near: 0.1,
          far: 10000,
          fov: 45
        };
        this.camera = null;
        this.cameraTarget = this.cameraDefaults.posCameraTarget;

        this.controls = null;

        this.smoothShading = true;
        this.doubleSide = false;
        this.streamMeshes = true;

        this.cube = null;
        this.pivot = null;

        this.wwObjLoader2 = new (THREE.OBJLoader2.WWOBJLoader2 as any)();
        this.wwObjLoader2.setCrossOrigin('anonymous');

        // File Input
        this.inputFileElem = document.getElementById('js-upload');

        // webModal
        this.webModal = document.getElementById('js-modal');
        this.webModalClose = document.getElementById('js-close-modal');
        this.elemUploadButton = document.getElementById('js-upload-button');

        this.elemUploadButton.addEventListener('click', this.openModal.bind(this), false);

        // Check for the various File API support.
        this.fileApiAvailable = true;
      }

      webLoader.prototype.initGL = function() {
        this.renderer = new THREE.WebGLRenderer({
          canvas: this.canvas,
          antialias: true
        });
        this.renderer.setClearColor(0x1d1d1d);

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(this.cameraDefaults.fov, this.aspectRatio,
          this.cameraDefaults.near,
          this.cameraDefaults.far);
        this.resetCamera();
        this.controls = new THREE.TrackballControls(this.camera, this.renderer.domElement);

        let ambientLight = new THREE.AmbientLight(0x404040);
        let directionalLight1 = new THREE.DirectionalLight(0xC0C090);
        let directionalLight2 = new THREE.DirectionalLight(0xC0C090);

        directionalLight1.position.set(-100, -50, 100);
        directionalLight2.position.set(100, 50, -100);

        this.scene.add(directionalLight1);
        this.scene.add(directionalLight2);
        this.scene.add(ambientLight);

        let helper = new THREE.GridHelper(1200, 60, 0x222222, 0x272727);
        this.scene.add(helper);

        this.createPivot();
      };

      webLoader.prototype.createPivot = function() {
        this.pivot = new THREE.Object3D();
        this.pivot.name = 'Pivot';
        this.scene.add(this.pivot);
      };

      webLoader.prototype.initPostGL = function() {
        let self = this;
        let reportProgress = function reportProgress(content) {
          console.log('Progress: ' + content);
        };
        let meshLoaded = function meshLoaded(name, bufferGeometry, material) {
          console.log('Loaded mesh: ' + name + ' Material name: ' + material.name);
        };
        let completedLoading = function completedLoading() {
          self.openModal();
          console.log('Loading complete!');
        };
        this.wwObjLoader2.registerCallbackProgress(reportProgress);
        this.wwObjLoader2.registerCallbackCompletedLoading(completedLoading);
        this.wwObjLoader2.registerCallbackMeshLoaded(meshLoaded);

        return true;
      };

      webLoader.prototype.loadFiles = function(prepData) {
        prepData.setSceneGraphBaseNode(this.pivot);
        prepData.setStreamMeshes(this.streamMeshes);
        this.wwObjLoader2.prepareRun(prepData);
        this.wwObjLoader2.run();
      };

      webLoader.prototype._handleFileSelect = function(event, pathTexture) {
        let fileObj = null;
        let fileMtl = null;
        let files = event.target.files;

        for (let i = 0, file; file = files[i]; i++) {

          if (file.name.indexOf('\.obj') > 0 && fileObj === null) {
            fileObj = file;
          }

          if (file.name.indexOf('\.mtl') > 0 && fileMtl === null) {
            fileMtl = file;
          }
        }

        let fileReader = new FileReader();
        fileReader.onload = function(fileDataObj: any) {

          let uint8Array = new Uint8Array(fileDataObj.target.result);
          if (fileMtl === null) {

            app.loadFilesUser({
              name: 'userObj',
              objAsArrayBuffer: uint8Array,
              pathTexture: pathTexture,
              mtlAsString: null
            });
          } else {

            fileReader.onload = function(fileDataMtl: any) {

              app.loadFilesUser({
                name: 'userObj',
                objAsArrayBuffer: uint8Array,
                pathTexture: pathTexture,
                mtlAsString: fileDataMtl.target.result
              });
            };
            fileReader.readAsText(fileMtl);
          }
        };
        fileReader.readAsArrayBuffer(fileObj);
      };

      webLoader.prototype.loadFilesUser = function(objDef) {
        let prepData = new (THREE.OBJLoader2.WWOBJLoader2 as any).PrepDataArrayBuffer(objDef.name,
          objDef.objAsArrayBuffer,
          objDef.pathTexture, objDef.mtlAsString);
        prepData.setSceneGraphBaseNode(this.pivot);
        prepData.setStreamMeshes(this.streamMeshes);
        this.wwObjLoader2.prepareRun(prepData);
        this.wwObjLoader2.run();
      };

      webLoader.prototype.resizeDisplayGL = function() {

        this.recalcAspectRatio();
        this.renderer.setSize(this.canvas.offsetWidth, this.canvas.offsetHeight, false);
        console.log('RDGL');
        this.updateCamera();
      };

      webLoader.prototype.recalcAspectRatio = function() {
        this.aspectRatio = this.canvas.offsetHeight === 0 ? 1 : this.canvas.offsetWidth / this.canvas
            .offsetHeight;
      };

      webLoader.prototype.resetCamera = function() {
        this.camera.position.copy(this.cameraDefaults.posCamera);
        this.cameraTarget.copy(this.cameraDefaults.posCameraTarget);

        this.updateCamera();
      };

      webLoader.prototype.updateCamera = function() {
        this.camera.aspect = this.aspectRatio;
        this.camera.lookAt(this.cameraTarget);
        this.camera.updateProjectionMatrix();
      };

      webLoader.prototype.render = function() {
        if (!this.renderer.autoClear) this.renderer.clear();

        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };

      webLoader.prototype.alterSmoothShading = function() {

        let scope = this;
        scope.smoothShading = !scope.smoothShading;
        console.log(scope.smoothShading ? 'Enabling SmoothShading' : 'Enabling FlatShading');

        scope.traversalFunction = function(material) {
          material.shading = scope.smoothShading ? THREE.SmoothShading : THREE.FlatShading;
          material.needsUpdate = true;
        };
        let scopeTraverse = function scopeTraverse(object3d) {
          scope.traverseScene(object3d);
        };
        scope.pivot.traverse(scopeTraverse);
      };

      webLoader.prototype.alterDouble = function() {

        let scope = this;
        scope.doubleSide = !scope.doubleSide;
        console.log(scope.doubleSide ? 'Enabling DoubleSide materials' :
          'Enabling FrontSide materials');

        scope.traversalFunction = function(material) {
          material.side = scope.doubleSide ? THREE.DoubleSide : THREE.FrontSide;
        };

        let scopeTraverse = function scopeTraverse(object3d) {
          scope.traverseScene(object3d);
        };
        scope.pivot.traverse(scopeTraverse);
      };

      webLoader.prototype.traverseScene = function(object3d) {

        if (object3d.material instanceof THREE.MultiMaterial) {

          let materials = object3d.material.materials;
          for (let name in materials) {

            if (materials.hasOwnProperty(name)) this.traversalFunction(materials[name]);
          }
        } else if (object3d.material) {

          this.traversalFunction(object3d.material);
        }
      };

      webLoader.prototype.clearAllAssests = function() {
        let scope = this;
        let remover = function remover(object3d) {

          if (object3d === scope.pivot) {
            return;
          }
          console.log('Removing: ' + object3d.name);
          scope.scene.remove(object3d);

          if (object3d.hasOwnProperty('geometry')) {
            object3d.geometry.dispose();
          }
          if (object3d.hasOwnProperty('material')) {

            let mat = object3d.material;
            if (mat.hasOwnProperty('materials')) {

              let materials = mat.materials;
              for (let name in materials) {

                if (materials.hasOwnProperty(name)) materials[name].dispose();
              }
            }
          }
          if (object3d.hasOwnProperty('texture')) {
            object3d.texture.dispose();
          }
        };

        scope.scene.remove(scope.pivot);
        scope.pivot.traverse(remover);
        scope.createPivot();
        scope.inputFileElem.value = null;
        console.log();
      };

      webLoader.prototype.openModal = () => {
        // this.webModal.classList.add('is-open');
        // this.webModalClose.addEventListener("click", this.closeModal.bind(this), false);
        // console.log('Modal Opened');
      };
      webLoader.prototype.closeModal = () => {
        // let self = this;
        // this.webModal.classList.remove('is-open');
        // this.webModalClose.removeEventListener("click", this.closeModal, true);
        // app.clearAllAssests();
        // console.log('Modal Closed');
      };

      return webLoader;
    }();

    let app = new webLoader(document.getElementById('js-canvas'));

    // Init dat.gui and controls
    let elemFileInput = document.getElementById('js-upload');


    let WWOBJLoader2Control = function WWOBJLoader2Control() {
      this.smoothShading = app.smoothShading;
      this.doubleSide = app.doubleSide;
      this.streamMeshes = app.streamMeshes;
    };
    let wwObjLoader2Control = new WWOBJLoader2Control();

    let gui: any = new (wnd.dat as any).GUI({
      autoPlace: false,
      width: '100%'
    });

    let menuDiv = document.getElementById('js-controls');
    menuDiv.appendChild(gui.domElement);
    let folderOptions = gui;

    if (app.fileApiAvailable) {

      wwObjLoader2Control.pathTexture = 'obj/female02/';

      wwObjLoader2Control.loadObjFile = function() {
        elemFileInput.click();
      };
      folderOptions.add(wwObjLoader2Control, 'loadObjFile').name('Upload 3D Model (.obj)');

      let loadObjFile = function() {
        elemFileInput.click();
      }
      let handleFileSelect = function handleFileSelect(object3d) {
        app._handleFileSelect(object3d, wwObjLoader2Control.pathTexture);
      };

      elemFileInput.addEventListener('change', handleFileSelect, false);

      wwObjLoader2Control.clearAllAssests = function() {
        app.clearAllAssests();
      };
      wwObjLoader2Control.uploadServer = function() {
        console.log('Uploading');

        uploadFiles();

      };


      folderOptions.add(wwObjLoader2Control, 'clearAllAssests').name('Clear Scene');
      folderOptions.add(wwObjLoader2Control, 'uploadServer').name('Rig It');

    }

    let resizeWindow = function resizeWindow() {
      app.resizeDisplayGL();
      console.log('rz');
    };

    let render = function render() {
      requestAnimationFrame(render);
      app.render();
    };

    function uploadFiles() {
      // event.stopPropagation(); // Stop stuff happening
      // event.preventDefault(); // Totally stop stuff happening
    //
    //   // START A LOADING SPINNER HERE
    //   //  document.getElementById("loader").style.display = "";
      (document.getElementById("uploadForm") as any).submit();
    //
    //   // socket.emit('pause');
    //   /*
    //    // Create a formdata object and add the files
    //    var data = new FormData();
    //    $.each(document.getElementById('js-upload').files, function(key, value) {
    //    data.append(key, value);
    //    });
    //    $.ajax({
    //    url: '/upload',
    //    type: 'POST',
    //    data: data,
    //    cache: false,
    //    dataType: 'json',
    //    processData: false, // Don't process the files
    //    contentType: false, // Set content type to false as jQuery will tell the server its a query string request
    //    success: function(data, textStatus, jqXHR) {
    //    if (typeof data.error === 'undefined') {
    //    // Success so call function to process the form
    //    submitForm(event, data);
    //    } else {
    //    // Handle errors here
    //    console.log('ERRORS: ' + data.error);
    //    }
    //    },
    //    error: function(jqXHR, textStatus, errorThrown) {
    //    // Handle errors here
    //    console.log('ERRORS: ' + textStatus);
    //    // STOP LOADING SPINNER
    //    }
    //    });
    //    */
    }
    window.addEventListener('resize', resizeWindow, false);

    console.log('Starting initialisation phase...');
    app.initGL();
    app.resizeDisplayGL();
    app.initPostGL();



    render();
  }

}
