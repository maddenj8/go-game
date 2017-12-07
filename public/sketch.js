var player = new Player("black");

var player_white = new Player("white");
var board = new Board();
board.buildBoard();
var tmpX;
var tmpY;

function displayScore() {
	return player.score;
}

function checkCurrentMove() {
	if (player.currentTurn) {
		document.getElementById('turnNotice').innerHTML = "Your Turn";
	}
	else {
		document.getElementById('turnNotice').innerHTML = "Opponent's Turn";
	}
}

function passMove() {
	console.log("hello");
	if (player.currentTurn) {
		player.currentTurn = false;
		player.passCounter++;
		alert("You passed on your move");
		if (player.passCounter >= 2) {
			console.log("GAME ENDED");
			//SEND MESSAGE TO THE OTHER PLAYER
		}
	}
}

function setup() {
	createCanvas(542, 542); // This centres the board in-line with the chat & score box.
	background(0);
	console.log(board.board);
	player.placeStone(190, 140, board);
	player.placeStone(140, 190, board);
	player.placeStone(190, 240, board);
	player_white.placeStone(190, 190, board);
	setName();
}

function checkMousePosition() {
	tmpX = mouseX; //freeze the mouseX and mouseY at the particular frame 
	tmpY = mouseY;
	if (player.color == "black") {
		fill(0);
	}
	else {
		fill(255);
	}
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
		var prevLength = board.stones.length;

		player.placeStone(tmpX, tmpY, board);
		//SEND COORDINATES OF THE NEW STONE TO THE SERVER HERE
		if (board.stones.length > prevLength) {
			player.currentTurn = false;
			capture(board, player);
			sendState();
			console.log(player.prisoners);
			//DO THE SERVER STUFF HERE
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
	capture(board, player);
	checkCurrentMove();
	fill(242, 176, 109); //draws the frame of the board 
	rect(0, 0, 540, 540);
	board.drawBoard(); //draws the board itself
	board.drawStones(); //draws any stones that need to be drawn on the board
	board.drawStones();

	if (player.currentTurn) {
		checkMousePosition(); //checks the mouse to get the coordinates of the nearest stone to be placed	
	}
}

function getStones(){
   state = board.stones;
   return state
}

function updateBoard(newStone) {
   player.placeStone(newStone[0],newStone[1], board);
   console.log(board.stones);
}

function getCoords() {
   return [tmpX, tmpY];
}

