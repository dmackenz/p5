var circles = [];
var moveSpeed = 9;

function setup() {
    createCanvas(windowWidth, windowHeight);

    var numCircles = (width*height) / 4000;

    for (var i = 0; i < numCircles; i++) {
        circles.push(new Circle(random(width), random(height)));
    }

    noStroke();
}

function draw() {
    background(51, 0);
    for (var i = 0; i < circles.length; i++) {
        circles[i].run();
    }
}

function Circle(x, y) {
    this.pos = createVector(x, y);
    this.r = random(10, 30);
    this.c = new Colour(random(255), random(255), random(255), 1);
}

Circle.prototype.run = function() {
    this.show();
    this.move();
};

Circle.prototype.show = function() {
    fill(this.c.r, this.c.g, this.c.b, this.c.a);
    ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
};

Circle.prototype.move = function() {
    this.pos.x += random(-moveSpeed, moveSpeed);
    this.pos.y += random(-moveSpeed, moveSpeed);
};

function Colour(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}