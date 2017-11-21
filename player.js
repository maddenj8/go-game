var Player = function() {

	this.rating = 0				// Their rating is whatever is found in their row in the DB.
	this.username = ""	
	this.score = 0				// Each game, both player's score initialise to 0.
	this.currentTurn			// Boolean (T/F) Specifying whose turn it is.
	this.color = "black"		// Either "black" or "white" -- Boolean approach might be wiser.
	this.password

	// Template function - this will be stored in a database.
	var makeAccount = function(username, password) {
		this.username = username;
		this.password = password;
		// Add these to that players objects (make them private if possible)
	}

	var displayScore = function() {
		// Returns an integer of this player object's score
		return this.score;
	}

	var placeStone = function(board, stoneX, stoneY) {
		// Add a Tile.isEmpty() method to the tile class & an moveIsLegal() method.
		// board[stoneX][stoneY] is a Tile Obj.
		// Check if the slot is empty & that the move is legal.
		if (board[stoneX][stoneY].isEmpty() && board[stoneX][stoneY].moveIsLegal()) {
			// If both of these conditions are true, we can place a stone.
			board[stoneX][stoneY].addStone(stoneX, stoneY, this.color)
		}
		else {
			console.log("Invalid Liberty.")
		}

		return board;			// Returns an updated version of the board object.
	}

}
