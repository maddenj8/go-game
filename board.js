var Board = function() {
	this.size = 9 // number of rows the baord has (and columns as it is a square)
	this.board = [];
	this.buildBoard = function() {
		this.stones = [];
		var offset = 50;
		for (var i = 0; i < this.size; i++) {
			this.board.push([]);
			for (var j = 0; j < this.size; j++) {
				this.board[i][j] = new Tile(j * offset + 40, i * offset + 40);
				//this looks wrong as it appears the j and i are in the wrong place but 
				//if you want to add to the list in the order you would expect the tile 
				//to be in the list j and i have to be inverted to what you would initially think
			}
		}
	}

	this.drawBoard = function() {
		for (var i = 0; i < this.size; i++) {
			for (var j = 0; j < this.size; j++) {
				this.board[i][j].drawTile();
			}
		}
	}
	this.drawStones = function() {
		for (var i = 0; i < this.stones.length; i++) {
			this.stones[i].drawStone();
		}
	}
	this.isEmpty = function(x, y) {
		for (var i = 0; i < this.stones.length; i++) {
			if (this.stones[i].stoneX == x && this.stones[i].stoneY == y) {
				return false;
			}
		}
		return true;
	}
}
