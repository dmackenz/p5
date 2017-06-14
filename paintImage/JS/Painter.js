var pixelSize;

function Painter(force) {
	this.pos = createVector(random(width), random(height));
	this.vel = createVector();
	this.acc = createVector();

	this.applyForce(force);
}

Painter.prototype.show = function() {
	noStroke();
	ellipse(this.pos.x, this.pos.y, pixelSize, pixelSize);
};

Painter.prototype.applyForce = function(force) {
	this.acc.add(force);
};

Painter.prototype.update = function() {
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.mult(0);

	if (this.pos.x >= width - pixelSize || this.pos.x <= pixelSize) {
		this.vel.x *= -1;
	}

	if (this.pos.y >= height - pixelSize || this.pos.y <= pixelSize) {
		this.vel.y *= -1;
	}
};

Painter.prototype.getColor = function() {
	return img.get(this.pos.x, this.pos.y);
};