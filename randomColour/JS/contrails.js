/**
 * Random Contrails
 * Programmed by Dylan MacKenzie
 * May 28, 2017
 * p5.js
 */

var p5_1 = new p5(function(sketch) {

    var particles = [];
    var n = 10;

    var maxspeed = 5;
    var maxwalking = 2;

    sketch.setup = function() {
        var canv = sketch.createCanvas(400, 400);
        canv.parent('contrail');
        sketch.background(51);

        for (var i = 0; i < n; i++) {
            var p = new Particle(
                sketch.random(sketch.width),
                sketch.random(sketch.height)
            );

            particles.push(p);
        }

    }

    sketch.draw = function() {
        if (sketch.frameCount % 1000 === 0) {
            sketch.background(51);
        }

        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];

            p.randomMove();
            p.show();
        }
    }

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.xspeed = sketch.random(-maxspeed, maxspeed);
        this.yspeed = sketch.random(-maxspeed, maxspeed);
        this.size = sketch.random(12, 20);
        this.c = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255), sketch.random(255));
    }

    Particle.prototype.randomMove = function() {
        // apply movement speed to particle
        this.x += this.xspeed * sketch.random(maxwalking);
        this.y += this.yspeed * sketch.random(maxwalking);

        // wrap canvas horizontally
        if (this.x < 0) {
            this.x = sketch.width;
        } else if (this.x > sketch.width) {
            this.x = 0;
        }

        // wrap canvas vertically
        if (this.y < 0) {
            this.y = sketch.height;
        } else if (this.y > sketch.height) {
            this.y = 0;
        }
    };

    Particle.prototype.show = function() {
        sketch.fill(this.c);
        sketch.stroke(42);
        sketch.ellipse(this.x, this.y, this.size, this.size);
    };
});