var clusters = [];
var starta = 20;

function setup() {
    createCanvas(windowWidth, windowHeight);

    var numClusters = 100;
    var loops = sqrt(numClusters);
    var xSlot = width / loops;
    var ySlot = height / loops;

    for (var i = 0 ; i < loops; i++) {
        for (var j = 0 ; j < loops; j++) {
            var numLines = floor(random(4, 10));
            var variance = 20;
            var x = i * xSlot + random(-variance, variance);
            var y = j * ySlot + random(-variance, variance);
            clusters.push(new Cluster(x, y, numLines, starta));
        }
    }

    fill(255);
    noStroke();
}

function draw() {
    background(51);

    clusters.forEach(function(cluster) {
        cluster.run();
    });
}

function Cluster(x, y, size, alpha) {
    this.pos = createVector(x, y);
    this.lines = [];
    this.alpha = alpha;
    this.xoff = random(100);
    this.yoff = random(100);
    this.angle = random(PI * 2);

    for (var i = 0; i < size; i++) {
        this.lines.push(new Line(this.pos));
    }
}

Cluster.prototype.run = function() {
    if (this.isMouseNear()) {
        this.alpha += 40;
    } else {
        this.alpha = starta;
    }

    var alpha = this.alpha;


    this.lines.forEach(function(line) {
        line.show(alpha);
        line.resize();
    });

    this.float();
};

Cluster.prototype.isMouseNear = function() {
    var allowance = 50;

    return (
            mouseX < this.pos.x + allowance && this.pos.x - allowance < mouseX &&
            mouseY < this.pos.y + allowance && this.pos.y - allowance < mouseY
            );
};

Cluster.prototype.float = function() {
    this.xoff += 0.01;
    this.yoff += 0.01;
    random(1) < 0.5 ? this.pos.x -= noise(this.xoff) : this.pos.x += noise(this.xoff);
    random(1) < 0.5 ? this.pos.y -= noise(this.yoff) : this.pos.y += noise(this.yoff);
};

function Line(pos) {
    this.pos = pos;
    this.angle = random(2 * PI);
    this.len = random(10, 100);
}

Line.prototype.show = function(alpha) {
    var x = this.pos.x;
    var y = this.pos.y;
    var tipSize = 5;

    push();
    stroke(0, 200, 0, alpha);
    translate(x, y);
    rotate(this.angle);
    line(0, 0, this.len, this.len);
    ellipse(this.len, this.len, tipSize, tipSize);
    pop();
};

Line.prototype.resize = function() {
    var variance = 1;
    random(1) < 0.5 ? this.len -= variance : this.len += variance;
};