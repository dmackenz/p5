/**
 * Fountain
 * Programmed by Dylan MacKenzie
 * May 28, 2017
 * p5.js
 */

/**
 * Drop
 *
 * Constructor function for a Drop object.
 */
function Drop(x, y, size, upForce, xspeed) {
    this.xOriginal = x;
    this.yOriginal = y;
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.size = size;
    this.xspeed = xspeed;
    this.upForce = upForce;

    if (random(1) < 0.5) {
        this.xdir = -1;
    } else {
        this.xdir = 1;
    }

    this.applyForce(0, upForce);
    this.applyForce(this.xspeed * this.xdir, 0);
}

/**
 * show
 *
 * Displays droplet to canvas.
 */
Drop.prototype.show = function() {
    fill(25, 50, 200);
    stroke(0);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
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
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
};

/**
 * reset
 *
 * Once a drop has left the screen reset its
 * posititon and reapply the upForce
 */
Drop.prototype.reset = function() {
    if (this.pos.y >= height + height / 20) {
        this.pos = createVector(this.xOriginal, this.yOriginal);
        this.applyForce(0, 1.7 * this.upForce);
    }
};