var viewingTerrainWebGL = false;
var justPressedReturn = false;
var justPressedAlt = false;

function HandleSceneLoaded() {
    document.getElementById("loader").style.display = "none";

    document.addEventListener("pointerlockchange", function(event) {
        if (document.pointerLockElement == null) {
            if (!justPressedReturn && !justPressedAlt)
                ResetAndHidePlayer(true);
        }
    });


    document.onkeydown = function(event) {
        justPressedAlt = true;
        setTimeout(function() { justPressedAlt = false; }, 1000);
    }

}

function HandleEscapePressedFromWebGL() {
    ResetAndHidePlayer(false);
}

function HandleReturnPressedFromWebGL() {
    console.log("Pressed return");
    justPressedReturn = true;
    setTimeout(function() { justPressedReturn = false; }, 1000);
}


function ResetAndHidePlayer(sendResetMessage) {
    if (sendResetMessage)
        gameInstance.SendMessage("Terrain", "FromJS_Reset");
    document.getElementById("unity").style.display = "none";
    //Some weird hack we need to do to get button presses to register again
    //document.getElementById("input_area").click();
    viewingTerrainWebGL = false;
    document.exitPointerLock();
}


document.onmousedown = function(event) {

    if (viewingTerrainWebGL) {
        if (event.target.nodeName != "CANVAS") {
            document.getElementById("unity").style.display = "none";
            viewingTerrainWebGL = false;
            document.exitPointerLock();    
        }
    } else {
        if (event.target.nodeName == "INPUT") {
            gameInstance.SendMessage("Terrain", "FromJS_SetWebGLInput", 0);
        } else {
            gameInstance.SendMessage("Terrain", "FromJS_SetWebGLInput", 1);
        }
    }
};


function ValidateInputsThenApply(src) {
    var foundErr = false;
    var inputs = document.getElementsByTagName("INPUT");
    //Validate
    console.log('SRC11' + src);


    document.getElementById("unity").style.display = "block";

    //Send the urls to unity
    gameInstance.SendMessage("Terrain", "FromJS_LoadHeightmap", src);
    gameInstance.SendMessage("Terrain", "FromJS_LoadTerrainTex", 'https://firebasestorage.googleapis.com/v0/b/norahanimation.appspot.com/o/texture%2Fnewtex1_lores.jpg?alt=media&token=0ff19e3a-1246-4e7c-ada9-7e2e3399f725');

    //To make we don't immediately close the unity popup window when setting viewingGL to true
    setTimeout(function() { viewingTerrainWebGL = true; }, 100);

}