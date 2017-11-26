var player = new Player("black");
var player_white = new Player("white");
var board = new Board();
board.buildBoard();
var tmpX;
var tmpY;

function displayScore() {
	return player.score
}

function setup() {
	createCanvas(700, 900); // This centres the board in-line with the chat & score box.
	console.log(board.board);
	player.placeStone(190, 140, board);
	player.placeStone(140, 190, board);
	player.placeStone(190, 240, board);
	player_white.placeStone(190, 190, board);
}

function checkMousePosition() {
	tmpX = mouseX; //freeze the mouseX and mouseY at the particular frame 
	tmpY = mouseY;
	fill(0) ? player.color == "black" : fill(255);
	for (var i = 0; i < board.size; i++) {
		for (var j = 0; j < board.size; j++) {
			if (tmpX > 0 && tmpY > 0 && tmpX < board.size * 50 + 80 && tmpY < board.size * 50 + 80) {
				//if the mouse is in range of a tile on the board
				if (tmpX > (board.board[i][j].x - 25) && tmpX < (board.board[i][j].x + 25) && tmpY > (board.board[i][j].y - 25) && tmpY < (board.board[i][j].y + 25)) {
					tmpX = board.board[i][j].x;
					tmpY = board.board[i][j].y;
					ellipse(tmpX, tmpY, 45, 45);
				}
				//if the mouse is on a tile just out of range of the board list
				//left side of the board testing constraints
				else if (tmpX > (board.size * 50 + 15) && tmpX < (board.size * 50 + 65) && tmpY > (board.board[i][j].y - 25) && tmpY < (board.board[i][j].y + 25)) {
					tmpX = board.size * 50 + 40;
					tmpY = board.board[i][j].y;
					ellipse(tmpX, tmpY, 45, 45);
				}
				//same again but bottom constraint
				else if (tmpY > (board.size * 50 - 15) && tmpY < (board.size * 50 + 65) && tmpX > (board.board[i][j].x - 25) && tmpX < (board.board[i][j].x + 25)) {
					tmpX = board.board[i][j].x;
					tmpY = board.size * 50 + 40;
					ellipse(tmpX, tmpY, 45, 45);
				}
				//ridiculous bottom right case 
				else if (tmpX > (board.size * 50 + 15) && tmpX < (board.size * 50 + 65) && tmpY > (board.size * 50 - 15) && tmpY < (board.size * 50 + 65)) {
					tmpX = board.size * 50 + 40;
					tmpY = board.size * 50 + 40;
					ellipse(tmpX, tmpY, 45, 45);
				}
				
			}
	
				 
		}
	}
}

function mousePressed() {
	//fix a bug where even if the mouse was placed out of range stones could be placed off the board
	//checks if it is the players turn 
	if (tmpX >= 40 && tmpY >= 40 && player.currentTurn && tmpX <= board.size * 50 + 40 && tmpY <= board.size * 50 + 40) {  //fix this alert thing
		var moveTaken = player.placeStone(tmpX, tmpY, board);
		//SEND COORDINATES OF THE NEW STONE TO THE SERVER HERE
		console.log(moveTaken);
		if (moveTaken) {
			player.currentTurn = false;
			capture(board, player.color, board.stones);
		}
	}
	else if (mouseX >= 0 && mouseY >= 0 && mouseX <= (board.size * 50 + 80) && mouseY <= (board.size * 50 + 80) && !player.currentTurn) {
		alert("It is your opponents turn please wait");
	}
	//since with the check method tmpX and tmpY is the coordinates of the stone you can use this
	//to place the stone in the right coordinates not necessarily where the mouse is
}

function draw() {
	//draw the board at every frame
	fill(242, 176, 109); //draws the frame of the board 
	rect(0, 0, 540, 540);
	board.drawBoard(); //draws the board itself
	board.drawStones(); //draws any stones that need to be drawn on the board
	board.drawStones();
	if (player.currentTurn) {
		checkMousePosition(); //checks the mouse to get the coordinates of the nearest stone to be placed	
	}
}
