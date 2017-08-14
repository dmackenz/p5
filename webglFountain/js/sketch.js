var system = [];
var lightVectors = [];

var txtr;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    directionalLight(54, 160, 215, 1, 1, 0, 0);
    directionalLight(54, 160, 215, 1, -1, 0, 0);
    directionalLight(54, 160, 215, 1, 0, -1, 0);
}

function draw() {

    if (frameCount % 1 == 0) {
        system.push(new Water());
    }

    translate(-width / 2, -height / 2);
    background(0);

    for (var i = system.length - 1; i >= 0; i--) {
        push();
            system[i].show();
            system[i].forces.update();
            system[i].forces.edges_bounce();
            system[i].decide(i);
        pop();
    }
}

function Water() {
    this.forces = new Forces();
    this.forces.setPos(width / 2, height / 10);
    this.decay = height / 3000;
    this.r = height / 20;

    var startForce = 2;
    startForce = random(-startForce, startForce);
    var gravity = {
        x: 0,
        y: 0.1
    };

    this.forces.applyForce(startForce, 0);
    this.forces.setGlobalForce(gravity.x, gravity.y);
}

Water.prototype.show = function() {
    translate(this.forces.pos.x, this.forces.pos.y);
    sphere(this.r);

    this.r -= this.decay;
};

Water.prototype.decide = function(i) {
    if (this.r < 0) {
        system.splice(i, 1);
    }
}