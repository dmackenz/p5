/**
 * Ball object
 * 
 * x, y for cartesian coordinates
 * size for radius of ball
 * flash (bool) for flashing fill color
*/
function Ball(x, y, size, index) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.size = size;
    this.index = index;
}

/**
 * show
 *
 * Display the ball on the canvas.
*/
Ball.prototype.show = function() {
    stroke(255);
    fill(
        ballredSlide.value(),
        ballblueSlide.value(),
        ballgreenSlide.value(),
        ballalphaSlide.value()
    );

    ellipse(this.pos.x, this.pos.y, this.size, this.size);
};

/**
 * applyForce
 *
 * Apply a force to the ball.
*/
Ball.prototype.applyForce = function(x, y) {
    this.acc.add(createVector(x, y));
};

/**
* update
*
* Main physics engine of ball.
*/
Ball.prototype.update = function() {
    // add acceleration to velocity
    this.vel.add(this.acc);

    // add velocity to position
    this.pos.add(this.vel);

    // reset acceleration
    this.acc.mult(0);
};

/**
 * edges
 *
 * Prevents ball from moving out
 * of the canvas.
*/
Ball.prototype.edges = function() {
    // if ball goes off screen reverse x velocity
    if (this.pos.x < 0 || this.pos.x > width) {
        this.vel.x *= (-1);
    }

    // if ball goes off screen reverse y velocity
    if (this.pos.y <= 0 || this.pos.y >= height) {
        this.vel.y *= (-1);
    }
};

/**
 * destroy
 *
 * if a ball has fallen out of
 * the canvas destroy it
 */
Ball.prototype.destroy = function(index) {
    if (this.pos.y > height + (height * 0.1)) {
        balls.splice(index, 1);
        count--;
    }
};