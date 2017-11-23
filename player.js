var Player = function() {

	this.board = new Board();
	this.board.buildBoard();
	this.rating = 0;				// Their rating is whatever is found in their row in the DB.
	this.username = "";	
	this.score = 0;				// Each game, both player's score initialise to 0.
	this.currentTurn = true;		// Boolean (T/F) Specifying whose turn it is. DEFAULT TRUE FOR NOW BUT REALLY WOULD BE GIVEN BY THE SERVER
	this.color = "black";		// Either "black" or "white" -- Boolean approach might be wiser.
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

	this.placeStone = function(stoneX, stoneY) {
		// Add a Tile.isEmpty() method to the tile class & an moveIsLegal() method.
		// board[stoneX][stoneY] is a Tile Obj.
		// Check if the slot is empty & that the move is legal.
		if (this.board.isEmpty(stoneX, stoneY)) { //add checkLegalMove
			// If both of these conditions are true, we can place a stone.
			console.log(stoneX, stoneY);
			this.board.stones.push(new Stone(stoneX, stoneY, this.color));
			console.log(this.board.stones[0]);
		}
		else {
			console.log("Invalid Move.")
		}
	}
	

}
