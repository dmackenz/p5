/**
 * Fountain
 * Programmed by Dylan MacKenzie
 * May 28, 2017
 * p5.js
 */

// fountain variables
var drops = [];
var numDrops = 300;

// physics variables
var gravity = 0.1;
var spread = 1;
var sprayForce = 10;

function setup() {
    createCanvas(600, 600);

    // create all drops in the fountain
    for (var i = 0; i < numDrops; i++) {
        drops.push(
            new Drop(
                // center of canvas (x)
                width / 2,

                // near bottom of canvas (y)
                height - height/10,

                // size of drop relative to canvas size
                random(2, height/20),

                // how high water is sprayed
                -random(sprayForce * 0.3, sprayForce),

                // how much the water is spread horizontally
                random(0, spread)
            )
        );
    }
}


/**
 * draw
 *
 * Infinitely run foutain.
 */
function draw() {
    background(51);

    for (var i = drops.length-1; i >= 0; i--) {
        dropHandler(i);
    }
}


/**
 * dropHandler
 *
 * main logic for Drop within fountain.
 */
function dropHandler(index) {
    var d = drops[index];

    d.applyForce(0, gravity);
    d.update();
    d.reset();
    d.show();
}