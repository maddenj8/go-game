var board = new Board();

function setup() {
	createCanvas(900, 900);
	board.buildBoard();
}

function draw() {
	//draw the board at every frame
	fill(242, 176, 109);
	rect(0, 0, 540, 540);
	board.drawBoard();
}
