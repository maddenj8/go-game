var board = new Board();
var tmp_stone_black;
var tmp_stone_white;
function setup() {
	createCanvas(900, 900);
	board.buildBoard();
	tmp_stone_black = new Stone(board.board[1][1].x, board.board[1][1].y, "black");
	tmp_stone_white = new Stone(board.board[0][0].x, board.board[0][0].y, "white");
}

function draw() {
	//draw the board at every frame
	fill(242, 176, 109);
	rect(0, 0, 540, 540);
	board.drawBoard();
	tmp_stone_black.drawStone()
	tmp_stone_white.drawStone()
}
