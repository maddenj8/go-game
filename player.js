var Player = function(color) {

	this.rating = 0;				// Their rating is whatever is found in their row in the DB.
	this.prisoners = 0;
	this.username = "";	
	this.score = 0;				// Each game, both player's score initialise to 0.
	this.currentTurn = true;		// Boolean (T/F) Specifying whose turn it is. DEFAULT TRUE FOR NOW BUT REALLY WOULD BE GIVEN BY THE SERVER
	this.color = color;		// Either "black" or "white" -- Boolean approach might be wiser.
	this.password;

	// Template function - this will be stored in a database.
	this.makeAccount = function(username, password) {
		this.username = username;
		this.password = password;
		// Add these to that players objects (make them private if possible)
	}

	this.displayScore = function() {
		// Returns an integer of this player object's score
		return this.score;
	}

	this.placeStone = function(stoneX, stoneY, board) {
		// Add a Tile.isEmpty() method to the tile class & an moveIsLegal() method.
		// board[stoneX][stoneY] is a Tile Obj.
		// Check if the slot is empty & that the move is legal.
		if (board.isEmpty(stoneX, stoneY)) { //add checkLegalMove
			// If both of these conditions are true, we can place a stone.
			board.stones.push(new Stone(stoneX, stoneY, this.color));
			for (var i = 0; i < board.size; i++) {
				for (var j = 0; j < board.size; j++) {
					if (board.board[i][j].x == stoneX && board.board[i][j].y == stoneY) {
						board.board[i][j].stonePlaced = this.color;
						return true;
					}
				}
			}
		}
		else {
			console.log("Invalid Move.")
			return false;
		}
	}
	

}
