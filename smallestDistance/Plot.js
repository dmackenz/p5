function Plot() {
	this.pos = createVector(random(width), random(height));

	this.show = function() {
		stroke(255);
		fill(34);
		ellipse(this.pos.x, this.pos.y, 10, 10);
	}
}