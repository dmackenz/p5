var p5_3 = new p5(function(sketch) {
    var speed = 2;

    var particles = [];
    var n = 8;

    sketch.setup = function() {
        var canv = sketch.createCanvas(400, 400);
        canv.parent('connect');
        sketch.background(51);

        for (var i = 0; i < n; i++) {
            particles.push(
                new Particle(
                    sketch.random(0.2 * sketch.width, 0.8 * sketch.width),
                    sketch.random(0.2 * sketch.height, 0.8 * sketch.height)
                    )
                );
        }

    }

    sketch.draw = function() {
        sketch.background(51);

        for (var i = 0; i < particles.length-1; i++) {
            for (var j = i; j < particles.length; j++) {
            	sketch.stroke(255);
            	sketch.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
            }
        }

        for (var i = 0; i < particles.length; i++) {
            particles[i].show();
            particles[i].randomMove();
        }
    }

    function Particle(x, y) {
        this.x = x;
        this.y = y;
        this.size = sketch.random(12, 20);
        this.c = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255));
    }

    Particle.prototype.randomMove = function() {
        // apply movement speed to particle
        this.x += sketch.random(-speed, speed);
        this.y += sketch.random(-speed, speed);

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
        sketch.stroke(41);
        sketch.ellipse(this.x, this.y, this.size, this.size);
    };
});