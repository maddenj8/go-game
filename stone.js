var Stone = function(stoneX, stoneY, color) {
	this.stoneX = stoneX;
	this.stoneY = stoneY;
	this.color = color;
	this.drawStone = function() {
		stroke(0);
		if (color.toLowerCase() == "black") {
			fill(0);
		}
		else {
			fill(255);
		}	
		ellipse(this.stoneX, this.stoneY, 25, 25);
	}
}
