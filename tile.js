var Tile = function(x, y) {
	this.x = x
	this.y = y

	this.drawTile = function() {
		rect(x, y, 50, 50);
	}

	this.addStone = function(color) {
		// Add a stone ontop of the current rectangle
		playerStone = Stone(x, y, color)
		playerStone.drawStone()
	}

}
