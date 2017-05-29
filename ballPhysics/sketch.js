
// array and count of array for holding balls
var balls = [];
var count = 0;

// initial values for gravity and wind force
var windForce = 2;
var gravity = 0.5;

function setup() {
    // create dom elements
    backgroundRGB();
    ballRGBA();
    gravityandwind();

    // create canvas
    var c = createCanvas(400, 400);
    c.parent("canvasDiv");
}

function draw() {
    // get values from sliders for gravity and wind force
    windForce = windForceSlider.value();
    gravity = gravitySlider.value();

    // if background refresh enabled refresh with slider RGB values
    if (backgroundRefresh) {
        background(
            bgredSlide.value(),
            bgblueSlide.value(),
            bggreenSlide.value()
        );
    }

    // main loop for active balls
    for (var i = count-1; i >= 0; i--) {
        // apply gravity
        balls[i].applyForce(0, gravity);

        // apply physics engine        
        balls[i].update();

        // bounce balls
        balls[i].edges();

        // display balls
        balls[i].show();

        // destroy balls once off canvas
        balls[i].destroy(i);
    }
}

/**
 * createBall
 *
 * Pushes a new ball object to balls array.
 * Size of ball is mapped to the mouse location on canvas.
 */
function createBall() {
    var size = map(mouseY, height, 0, 10, 50);

    balls.push(new Ball(mouseX, mouseY, size, balls.length));
    count++;
}

/**
 * keyPressed
 *
 * RIGHT_ARROW: wind force right
 * LEFT_ARROW: wind force left
 * DOWN_ARROW: wind force down
 * UP_ARROW: wind force up
 * ENTER: create new ball
 */
function keyPressed() {
    // wind force right
    if (keyCode === RIGHT_ARROW) {
        for (var i = 0; i < count; i++) {
            balls[i].applyForce(windForce, 0);
        }

    // wind force left
    } else if (keyCode === LEFT_ARROW) {
        for (var i = 0; i < count; i++) {
            balls[i].applyForce(-windForce, 0);
        }

    // wind force up
    } else if (keyCode === UP_ARROW) {
        for (var i = 0; i < count; i++) {
            balls[i].applyForce(0, -windForce);
        }

    // wind force down
    } else if (keyCode === DOWN_ARROW) {
        for (var i = 0; i < count; i++) {
            balls[i].applyForce(0, windForce);
        }

    // create a new ball
    } else if (keyCode === ENTER) {
        createBall();
    } 
}
