// Create a reference for the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var img_width = 300;
var img_height = 100;

var img_image;
var img_imgTag;

var img_x = 100;
var img_y = 100;

function add() {
    img_imgTag = new Image(); // defining a variable with a new image
    img_imgTag.onload = uploadimg; // setting a function, onloading this variable
    img_imgTag.src = img_image; // load image
}

function uploadimg() {
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

// Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
        // Write a code to check the type of key pressed
        alphabetkey();
        document.getElementById("d1").innerHTML = "You pressed an alphabet key";
        console.log("alphabet");
    } else if (keyPressed >= 48 && keyPressed <= 57) {
        // Write a code to check the type of key pressed
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a number key";
        console.log("number");
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        // Write a code to check the type of key pressed
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an arrow key";
        console.log("arrow");
    } else if (keyPressed === 17 || keyPressed === 18 || keyPressed === 27) {
        // Write a code to check the type of key pressed
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a special key";
        console.log("special");
    } else {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed a symbol or other key";
    }
}

function alphabetkey() {
    // upload respective image with the message.
    img_image = "Alpkey.png";
    add();
}

function numberkey() {
    img_image = "numkey.png";
    add();
}

function arrowkey() {
    img_image = "Arrkey.png";
    add();
}

function specialkey() {
    img_image = "spkey.png";
    add();
}

function otherkey() {
    img_image = "otherkey.png";
    add();
}
