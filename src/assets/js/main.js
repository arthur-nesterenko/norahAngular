/*

HEIGHTMAP VISUALISATION

TODO:

[!] dat.gui.js
[!] resolution

    KEEP IN MIND THAT 1024 x 1024 is over a million of pixel,
    so terrain with size over 1 million pixels could be generated 
    10-20 minutes.
    
    It could be also set and 'hard-wired' @ index.html
    Iconcontroller('img_front', 512, 512, 1);

[x] UP / DOWN
[x] bird's view (orphographic)
[x] combined camera (change modes)
[-] mouse dragging (left-click]

FIXES
[-] hardwiring camera positions
[-] take back DAT.GUI (unhide)
[-] planned, [x] done, [!] please read comments

03.08.2017

meshWalk uses 3D space partitioning algorithm (Octatree) to find closest terrain
vertices to calculate possible collisions. 

By now it has search depth of 5 and min/max values of 64.
Generated terrain has 50 625 vertices, that's a lot.
Even with octatree partitioning is takes a plenty of time to process.
Ideally, we should redice terrain generation to 128x128 (16 384 vertices)

It will also reduce "falling underground" artefacts.

REFERENCES:
https://github.com/mrdoob/three.js/blob/master/examples/canvas_camera_orthographic2.html

@author Vladimir V. KUCHINOV
@email  helloworld@vkuchinov.co.uk

*/

var parameters = { 
    
                   terrainMatrix: 128, //128x128
                   minHeight: 16.0,
                   maxHeight: 128.0,
                   currentHeight: 0,
                   terrainSize: 1024,
                   octoreeDepth: 5,
                   octotreeMin: -256,
                   octotreeMax: 256,
                   delta: 0.1
    
                 };

parameters.currentHeight = ( parameters.maxHeight - parameters.minHeight ) / 2; 

var container, stats, geomertry, plane, colors = [];

//MeshWalk Controls
var camera, cameraMode, controls, scene, renderer, world, keyInputControl, tpsCameraControl, playerObjectHolder, playerController, min, max, partition, octree;

cameraMode = true;

var clock = new THREE.Clock();

var gui;

var Interface = function() {
    
    this.height = (parameters.maxHeight - parameters.minHeight) / 2; 
    
};
 
window.onload = function() {

    var ui = new Interface();
    gui = new dat.GUI( );
    gui.add(ui, "height", 16, 128, 1).onChange( function (value) { this.initialValue = value; setHeight(value); });
    
    $(gui.domElement).attr("hidden", true);

    
};

$(document).keypress(function(event_) {
    
    if(event_.which == 13) { cameraMode = cameraMode ? false : true; changeCameraMode(cameraMode);  }
    
});


var loader = new THREE.TextureLoader();

jQuery('#Ready').click(function() {

    $( "#img_front" ).hide();
    $( "#loading" ).show();
    
    var	data_image_1 = $('#img_front_CANVAS_PREVIEW')[0].toDataURL('image/png');

    if($('#img_front_FILES_INPUT').val()!=''){

                        console.log("Loading & generating process...");
        
                        loader.load(

                        data_image_1,

                        function ( texture ) {
                           
                        $(gui.domElement).attr("hidden", false);
                        init(texture);  

                        },
                        function ( xhr ) {
                            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
                        },

                        function ( xhr ) {
                            console.log( 'An error happened' );
                        }
                    );

    }
    
});

function getImageData( image ) {

    var canvas = document.createElement( 'canvas' );
    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext( '2d' );
    context.drawImage( image, 0, 0 );

    return context.getImageData( 0, 0, image.width, image.height );

}

function getPixel(image_, x_, y_ ) {

    var data = image_.data;
    var position = ( x_ + image_.width * y_ ) * 4;
    
    return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };

}

function RGBtoGrayscale(rgb_){ return Math.floor((Number(rgb_.r) + Number(rgb_.g) + Number(rgb_.b)) / 3.0); }


function map(value_, oldMin_, oldMax_, newMin_, newMax_) {
    
  var newValue = newMin_ + (value_ - oldMin_) / (oldMax_ - oldMin_) * (newMax_ - newMin_);
  return newValue;
    
};

function mapLog(value_, oldMin_, oldMax_, newMin_, newMax_) {
    
  newMin_ = Math.log(newMin_);
  newMax_ = Math.log(newMax_);
    
  return Math.exp(newMin_ + (newMax_ - newMin_) * ((value_ - oldMin_) / (oldMax_ - oldMin_)));
    
}


function updateGeometry(param0_, param1_){
    
}

function customPlane(texture_, width_, height_){
    
    var data = rescaleImageData(texture_.image, parameters.terrainMatrix);
    
    var widthSegments_ =  parameters.terrainMatrix;
    var heightSegments_ =  parameters.terrainMatrix;
    
    var geometry = new THREE.Geometry();
    var colors = [];
    
    var step = { x: width_ / widthSegments_, z: height_ / heightSegments_ };
     
    for(var z = 0, h = heightSegments_; z < h; z++){
        for(var x = 0, w = widthSegments_; x < w; x++){
            
           //exponential mapping
           //var customY = - 2 * mapLog(RGBtoGrayscale(getPixel(data, z, x)) + 1E-3, 255.0, 1E-3, mapping.min, mapping.max);
            
           //linear mapping
           var customY = -map(RGBtoGrayscale(getPixel(data, z, x)) + 1E-3, 255.0, 1E-3, 1E-3, parameters.currentHeight);
           geometry.vertices.push(new THREE.Vector3(-width_ / 2 + x * step.x, customY, - height_ / 2 + z * step.z));
            
           var c = RGBtoGrayscale(getPixel(data, z, x));
           //console.log(c);
           //var c1 = [40, 40, 100];
           //var c2 = [160, 240, 240];
           colors.push(new THREE.Color("rgb(" + Math.floor(map(c, 0, 255, 40, 160)) + "," + Math.floor(map(c, 0, 255, 40, 240)) + "," + Math.floor(map(c, 0, 100, 100, 240)) + ")"));
            
        }
    }
    

    for(var z = 0, h = heightSegments_ - 1; z < h; z++){
        for(var x = 0, w = widthSegments_ - 1; x < w; x++){

            var zIndex = z * heightSegments_;
            var nextZIndex = (z + 1) * heightSegments_;
            
            var faceA = new THREE.Face3(zIndex + x, nextZIndex + x + 1,  zIndex + x + 1);
            faceA.vertexColors[0] = colors[zIndex + x];
            faceA.vertexColors[1] = colors[nextZIndex + x + 1];
            faceA.vertexColors[2] = colors[zIndex + x + 1];
            
            geometry.faces.push(faceA);
            
            var faceB = new THREE.Face3(zIndex + x, nextZIndex + x, nextZIndex + x + 1);
            faceB.vertexColors[0] = colors[zIndex + x];
            faceB.vertexColors[1] = colors[nextZIndex + x];
            faceB.vertexColors[2] = colors[nextZIndex + x + 1];
            
            geometry.faces.push(faceB);
        }
    }
    
    return geometry;
    
}

function setHeight(value_){
    
    var oldHeight = parameters.currentHeight;
    var newHeight = value_;
    
    for(var i = 0, l = plane.geometry.vertices.length; i < l; i++){
        
        plane.geometry.vertices[i].y = map(plane.geometry.vertices[i].y, 1E-3, oldHeight, 1E-3, newHeight);
        
    }
    
    plane.geometry.verticesNeedUpdate = true;
    parameters.currentHeight = newHeight;
}

function rescaleImageData ( image_ , size_ ) {
    
    var canvas = document.createElement( 'canvas' );
    
    var ratio = image_.height / image_.width;
    canvas.width = size_;
    canvas.height = Math.floor( size_ * ratio );
    
    canvas.width = size_;
    canvas.height = size_;

    var context = canvas.getContext( '2d' );
    context.drawImage( image_, 0, 0, canvas.width, canvas.height );

    return context.getImageData( 0, 0, canvas.width, canvas.height );
    
}

function init(texture_) {

    container = document.getElementById( 'container' );

    camera = new THREE.CombinedCamera( window.innerWidth / 2, window.innerHeight / 2, 60, 1, 1500, -1500, 1500 );
    camera.lookAt( new THREE.Vector3(0.0, 0.0, 0.0) );
    
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xDEDEDE );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.innerHTML = "";
    container.appendChild( renderer.domElement );

    
    //controls
    world = new MW.World();
    min = new THREE.Vector3( parameters.octotreeMin, parameters.octotreeMin, parameters.octotreeMin);
    max = new THREE.Vector3( parameters.octotreeMax, parameters.octotreeMax, parameters.octotreeMax);
    partition = parameters.octoreeDepth;
    octree = new MW.Octree( min, max, partition );
    world.add( octree );
    
    playerObjectHolder = new THREE.Object3D();
    playerObjectHolder.position.set( 0, 30, 0 );
    scene.add( playerObjectHolder );

    sphere = new THREE.Mesh(
    new THREE.SphereGeometry( 1, 4, 4 ),
    new THREE.MeshBasicMaterial( { color: 0xff0000,  wireframe: true, transparent: true, opacity: 0.0} )
    );
    playerObjectHolder.add( sphere );

    playerController = new MW.CharacterController( playerObjectHolder, 1 );
    world.add( playerController );

    keyInputControl = new MW.KeyInputControl();

    tpsCameraControl = new MW.TPSCameraControl(
    camera, 
    playerObjectHolder, 
    {
    el: renderer.domElement,
    offset: new THREE.Vector3( 0, 1.8, 0 ), 
    rigidObjects: []
    }
    );

    keyInputControl.addEventListener( 'movekeyon',    function () { playerController.isRunning = true; } );
    keyInputControl.addEventListener( 'movekeyoff', function () { playerController.isRunning = false; } );
    keyInputControl.addEventListener( 'jumpkeypress',   function () { playerController.jump(); } );

    keyInputControl.addEventListener( 'movekeychange',  function () {

    var cameraFrontAngle = tpsCameraControl.getFrontAngle();
    var characterFrontAngle = keyInputControl.frontAngle;
    playerController.direction = THREE.Math.degToRad( 360 ) - cameraFrontAngle + characterFrontAngle;

    } );

    tpsCameraControl.addEventListener( 'updated', function () {

    var cameraFrontAngle = tpsCameraControl.getFrontAngle();
    var characterFrontAngle = keyInputControl.frontAngle;
    playerController.direction = THREE.Math.degToRad( 360 ) - cameraFrontAngle + characterFrontAngle;

    } );
    
    $( "#loading" ).hide();
    console.log("Done");
    
    //plane
    var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
    console.log(texture_.image.width);
    var geometry = customPlane(texture_, texture_.image.width * 2, texture_.image.height * 2);

    //geometry.verticesNeedUpdate = true;
    //geometry.normalsNeedUpdate = true;
    
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();
    
    plane = new THREE.Mesh(geometry, material);
    plane.receiveShadow = true;

    scene.add(plane);
    
    octree.importThreeMesh( plane );
    tpsCameraControl.rigidObjects.push( plane );
    scene.add(plane);
    
    camera.position.y = 250;

    window.addEventListener( 'resize', onWindowResize, false );
    
    animate();
    
}

function onWindowResize() {
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );2
    
}

function changeCameraMode(mode_){

   var s = "first person";
    if(mode_) { s = "birds view"; } 
    
    //false: first view, true: bird's eye
    console.log("mode: " + s);
    
    if(mode_) { 
        
    camera.toOrthographic(); 

    tpsCameraControl.lat = 24.843886672982435;
    tpsCameraControl.lon = 233.18502406931893; 
    tpsCameraControl.phi = 0.4336076214358833;
    tpsCameraControl.theta = -4.069846436351841;

    } 
    
    else { 
 
    camera.toPerspective(); 
        
    }


}

function animate() {
    
    requestAnimationFrame( animate );
    render();

}

function render() {
    
    world.step( parameters.delta );
    tpsCameraControl.update();

     if(playerObjectHolder.position.y < -100){
     
        playerObjectHolder.position.set( 0, 30, 0 );
        playerController.center = playerObjectHolder.position.clone();
        
        playerController.isGrounded = false; 
        playerController.isJumping = false; 
        playerController.isOnSlope = false;  
        playerController.direction  = 0; 
        playerController.movementSpeed = 10;
        playerController.velocity = new THREE.Vector3( 0, -10, 0 );
        playerController.groundHeight = -Infinity;
        playerController.groundNormal.set( 0, 1, 0 );
        
    }
    
    renderer.render( scene, camera );
    
}