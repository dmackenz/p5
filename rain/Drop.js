/**
 * Rain
 * Programmed by Dylan MacKenzie
 * May 28, 2017
 * p5.js
 */

/**
 * Drop
 *
 * Constructor function for a Drop object.
 */
function Drop() {
    this.pos = createVector(random(width), startHeight());
    this.vel = createVector();
    this.acc = createVector();
    this.size = random(10, 50);
    this.grav = map(this.size, 10, 50, 0.01, 0.2);
}

function startHeight() {
    return random(-height);
}

/**
 * show
 *
 * Displays droplet to canvas.
 */
Drop.prototype.show = function() {
    noStroke();
    fill(66, 134, 244);
    rect(this.pos.x, this.pos.y, this.size / 5, this.size);
};

/**
 * applyForce
 *
 * Apply a 2D force to the Drop body.
 */
Drop.prototype.applyForce = function(x, y) {
    this.acc.add(createVector(x, y));
};

/**
 * update
 *
 * Main physics engine for Drop body.
 */
Drop.prototype.update = function() {
    this.applyForce(0, this.grav);

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
};

/**
 * reset
 *
 * Once a drop has left the screen reset its
 * posititon.
 */
Drop.prototype.check = function() {
    if (this.pos.y > height + this.size + 10) {
        this.pos.y = startHeight();
        this.vel.mult(0);
        this.acc.mult(0);
    }
};