var Board = function() {
	this.size = 9 // number of rows the baord has (and columns as it is a square)
	this.board = []
	this.buildBoard = function() {
		var offset = 100;
		for (var i = 0; i < this.size; i++) {
			this.board.push([])
			for (var j = 0 j < this.size; j++) {
				this.board[i][j] = new Tile(i * offset, j * offset);
			}
		}
	}
	this.drawBoard = function() {
		for (var i = 0; i < this.size; i++) {
			for (var j = 0; j < this.size; j++) {
				this.board.drawTile();
			}
		}
	}
}

var Tile = function(x, y) {
	this.x = x;
	this.y = y;
	this.drawTile = function() {
		fill(242, 176, 109)
		stoke(0)
		rect(this.x, this.y, 100, 100)
	}
}
