var player = new Player();
var tmpX;
var tmpY;

function getScore() {
	return player.score
}

function setup() {
	createCanvas(900, 900); //create the canvas
	console.log(player.board);
}

function checkMousePosition() {
	tmpX = mouseX; //freeze the mouseX and mouseY at the particular frame 
	tmpY = mouseY;
	fill(0) ? player.color == "black" : fill(255);
	for (var i = 0; i < player.board.size; i++) {
		for (var j = 0; j < player.board.size; j++) {
			if (tmpX > (player.board.board[i][j].x - 25) && tmpX < (player.board.board[i][j].x + 25) && tmpY > (player.board.board[i][j].y - 25) && tmpY < (player.board.board[i][j].y + 25)) {
			//check if the mouse is in range of the stone
				tmpX = player.board.board[i][j].x;
				tmpY = player.board.board[i][j].y;
				//set tmpX and Y to the coordinates the stone will be placed
				ellipse(player.board.board[i][j].x, player.board.board[i][j].y, 45, 45);
				return;
			} 
			else if (tmpX > (player.board.size * 50 + 20) && tmpY > (player.board.board[i][j].y - 25) && tmpY < (player.board.board[i][j].y + 25)) {
			//work arounds for the edges of the board as they go out of range of board 
			//list so I can't use the method as above.
				ellipse(player.board.size * 50 + 40, player.board.board[i][j].y, 45, 45);
				tmpX = player.board.size * 50 + 40;
				tmpY = player.board.board[i][j].y;
				return;
			}
			else if (tmpX > (player.board.board[i][j].x - 25) && tmpX < (player.board.board[i][j].x + 25) && tmpY > (player.board.size * 50 + 20)) {
				ellipse(player.board.board[i][j].x, player.board.size * 50 + 40, 45, 45);
				tmpX = player.board.board[i][j].x;
				tmpY = player.board.size * 50 + 40;
				return;
			}
			//workaround for the bottom left corner as none of these conditions covered that case
			else if (tmpX > (player.board.size * 50 + 20) && tmpY > (player.board.size * 50 + 20)) {
				ellipse(player.board.size * 50 + 40, player.board.size * 50 + 40, 45, 45);
				tmpX = player.board.size * 50 + 40;
				tmpY = player.board.size * 50 + 40;
				return;
			}
		}
	}
}

function mousePressed() {
	//fix a bug where even if the mouse was placed out of range stones could be placed off the board
	//checks if it is the players turn 
	if (tmpX >= 40 && tmpY >= 40 && player.currentTurn) {  //fix this alert thing
		player.placeStone(tmpX, tmpY);
		//SEND COORDINATES OF THE NEW STONE TO THE SERVER HERE
		player.currentTurn = false;
	}
	else {
		alert("It is your opponents turn please wait");
	}
	//since with the check method tmpX and tmpY is the coordinates of the stone you can use this
	//to place the stone in the right coordinates not necessarily where the mouse is
}

function draw() {
	//draw the board at every frame
	fill(242, 176, 109); //draws the frame of the board 
	rect(0, 0, 540, 540);
	player.board.drawBoard(); //draws the board itself
	player.board.drawStones(); //draws any stones that need to be drawn on the board
	if (player.currentTurn) {
		checkMousePosition(); //checks the mouse to get the coordinates of the nearest stone to be placed	
	}
}
