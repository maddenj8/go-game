var board = [
        [0,1,0,0,0,0,0,0,0],
        [1,2,1,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],

]

// black is 1 
// white is 2
// nostone is 0 

//      print( board[col][row] )        ;
function capture( board , player) {
   var prisoners = player.prisoners;
   var color = player.color;
   var stones = board.stones;

   if( color == "black" ){
      var opponent = "white";
   } else{
      var opponent = "black";
   }

   for ( var col = 0 ; col < board.size; col++ ) {

      for ( var row = 0 ; row < board.size; row++ ) {
         var life_counter = 4;

         if( opponent  == board.board[col][row].stonePlaced ) {

         // we check north south east and west 
            console.log(board.board[col][row]);

         // north
            if (col > 0){
               if (board.board[col -1][row].stonePlaced == color  ){
		  console.log(board.board[col - 1][row]);
                  life_counter --;
	       }
            }


            // south 
            if (col < board.size ){
               if (board.board[col + 1][row].stonePlaced == color  ){
                  life_counter --;
		  console.log(board.board[col + 1][row]);
                  }
            }

            //east 
            if (row  > 0 ) {
               if (board.board[col][row - 1].stonePlaced == color  ){
		  console.log(board.board[col][row - 1]);
                  life_counter --;
                  }
            }


            //west 
            if (row  < 7 ){
               if (board.board[col][row + 1].stonePlaced == color  ){
		  console.log(board.board[col][row + 1]);
                  life_counter--;
                  }
            }
            console.log(life_counter)
            if( life_counter == 0 ){
	       console.log(board.board[col][row].x, board.board[col][row].y)
               player.prisoners = prisoners + 1;
               for (var i = 0; i < stones.length; i++) {
			console.log(stones[i].stoneX, stones[i].stoneY);
			if (stones[i].stoneX == board.board[col][row].x && stones[i].stoneY == board.board[col][row].y) {
				console.log("take the white at ", stones[i].stoneX, stones[i].stoneY);
				stones.splice(i, 1);
				board.board[col][row].stonePlaced = "empty";
				return;
			}
               }

            }
         }
      }
   }
}

