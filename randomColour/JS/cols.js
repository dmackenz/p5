var p5_2 = new p5(function(sketch) {
    var speed = 3;

    var particles = [];
    var n = 100;

    sketch.setup = function() {
        var canv = sketch.createCanvas(400, 400);
        canv.parent('cols');
        sketch.background(51);

        for (var i = 0; i < n; i++) {
            particles.push(
                new Particle(
                    sketch.random(sketch.width),
                    sketch.random(sketch.height)
                    )
                );
        }
    }

    sketch.draw = function() {
        if (sketch.frameCount % 1000 === 0) {
            sketch.background(51);
        }

        for (var i = 0; i < particles.length; i++) {
            particles[i].randomMove();
            particles[i].show();
        }
    }

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = sketch.random(12, 20);
        this.c = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255), sketch.random(255));
    }

    Particle.prototype.randomMove = function() {
        // apply movement speed to particle
        this.x += sketch.random(speed);
        this.y += sketch.random(speed);

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