/**
 * Rain
 * Programmed by Dylan MacKenzie
 * May 28, 2017
 * p5.js
 */

var drops = [];
var numDrops = 100;

function setup() {
    createCanvas(600, 400);

    // create all drops in the fountain
    for (var i = 0; i < numDrops; i++) {
        drops.push(new Drop());
    }
}

/**
 * draw
 *
 * Infinitely rain.
 */
function draw() {
    background(200);

    for (var i = drops.length-1; i >= 0; i--) {
        drops[i].update();
        drops[i].check();
        drops[i].show();
    }
}