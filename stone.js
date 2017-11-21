var Stone = function(stoneX, stoneY, color) {
	// Constructor parameters
	this.stoneX = stoneX;
	this.stoneY = stoneY;
	this.color = color;

	// drawStone method
	this.drawStone = function() {
		stroke(0);
		if (color.toLowerCase() == "black") {
			fill(0);
		}
		else {
			fill(255);
		}
		// Draw a circle (ellipse) at the specified position.	
		ellipse(this.stoneX, this.stoneY, 45, 45);
	}
}
