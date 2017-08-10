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
[x] mouse dragging (left-click]

[-] model popup with X [close] button
    https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

FIXES
[-] hardwiring camera positions
[-] take back DAT.GUI (unhide)

[-] planned, [x] done, [!] please read comments

27.07.2017

[x] In first person view, we must have character controller (collision) enabled. such that we have 
    the camera game object walking on the ground and not flying through the terrain grounds.
    
    FirstPersonControls.js 
    add collisionDetection() function true/false
    
[x] The rotation right now is click based. wherein you click to the right for camera to rotate 
    to right and so on. we need it to be drag based. like it is in the reference exe. (in the reference exe 
    it is simply mouse move based. we would need mouse press + move)
    
[x] We need you to make input heightmap resolution 225X225 instead of 1024X1024. Rather what would be easier 
    is if we    have an input field where we can specify resolution. So that it is modifiable as per input image.
    
    init(texture, 225); second variable is for desired image size
    
[!] Also another issue we are facing is the generated terrain doesnt really create depths in regions which 
    are dark. 

    For example, this image. the dark regions were supposed to become depressions in the terrain, however those 
    regions apply as color on top.
    
    Hari R: don't fret on point 4 then
    Hari R: its looking similar in the unity build
    
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

var loader = new THREE.TextureLoader();

var gui;

var Interface = function() {
    
    this.height = (parameters.maxHeight - parameters.minHeight) / 2;  
    
};
 
window.onload = function() {
    
    var ui = new Interface();
    gui = new dat.GUI( { autoPlace: false } );
    gui.add(ui, "height", 16, 128, 1).onChange( function (value) { this.initialValue = value; setHeight(value); });
        
};

$( document ).ready(function() {
    
    var gallerySize = 6;

        for(var i = 1; i <= gallerySize; i++){

            $("#0" + i).click(function(e) { 

                $("#modalClose").click(function(e) { $("#modalThree").css("display","none"); $( "#group" ).show(); resetThree(); });

                $("#modalThree").css("display","block");
                
                $( "#group" ).hide();
        
                loader.load(

                        $(this).attr("src") ,

                        function ( texture ) {

                        init(texture, parameters.terrainMatrix);  

                        },
                        function ( xhr ) {
                            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
                        },

                        function ( xhr ) {
                            console.log( 'An error happened' );
                        }
                );
                                
            });    
                
        }
        
    });
    

$(document).keypress(function(event_) {
    
    if(event_.which == 13) { cameraMode = cameraMode ? false : true; changeCameraMode(cameraMode);  }
    
});

function resetThree(){
    
    $("#container").empty(); 

}

function rescaleImageData ( image_ , size_ ) {
    
    var canvas = document.createElement( 'canvas' );
    
    var ratio = image_.height / image_.width;
    
    canvas.width = size_;
    canvas.height = Math.floor( size_ * ratio );

    var context = canvas.getContext( '2d' );
    context.drawImage( image_, 0, 0, canvas.width, canvas.height );

    return context.getImageData( 0, 0, canvas.width, canvas.height );
    
}

function getImageData( image_ ) {

    var canvas = document.createElement( 'canvas' );
    canvas.width = image_.width;
    canvas.height = image_.height;

    var context = canvas.getContext( '2d' );
    context.drawImage( image_, 0, 0 );

    return context.getImageData( 0, 0, image_.width, image_.height );

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

function customPlane(texture_, width_, height_, size_){
    
    var data = rescaleImageData(texture_.image, size_ );
    //var data = getImageData(texture_.image);
        
    var widthSegments_ = size_;
    var heightSegments_ = size_;
    
    geometry = new THREE.Geometry();
    
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

function init(texture_, size_) {

    var divWidth = $("#content").width() * 1.92;
    var divHeight= $("#content").height() * 1.975;
        
    container = document.getElementById( 'container' );

    camera = new THREE.CombinedCamera( divWidth / 2, divHeight / 2, 60, 1, 1500, -1500, 1500 );
    camera.lookAt( new THREE.Vector3(0.0, 0.0, 0.0) );
    
    scene = new THREE.Scene();

    camera.position.y = 250;
    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xDEDEDE );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( divWidth / 2 , divHeight / 2 );
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

    //plane
    var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, side: THREE.DoubleSide });
    var geometry = customPlane(texture_, texture_.image.width, texture_.image.height, size_);

    geometry.verticesNeedUpdate = true;
    geometry.normalsNeedUpdate = true;
    
    geometry.computeVertexNormals();
    geometry.computeFaceNormals();
    
    plane = new THREE.Mesh(geometry, material);
    //plane.receiveShadow = true;
    
    octree.importThreeMesh( plane );
    tpsCameraControl.rigidObjects.push( plane );
    scene.add(plane);

    $( "#loading" ).hide();
    console.log("Done");
    
    //window.addEventListener( 'resize', onWindowResize, false );
    //window.removeEventListener( 'vrdisplaypresentchange', onVRDisplayPresentChange );

    var HUD = document.getElementById( 'HUD' );
    HUD.appendChild(gui.domElement);
    
    animate();
    
}

function onWindowResize() {
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

    
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