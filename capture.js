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
function capture( board , color) {
   var opponent = 0;
   var prisoners = 0;

   if( color == "black" ){
      opponent = "white";
   } else{
      opponent = "black";
   }

   for ( var col = 0 ; col < board.size; col++ ) {

      for ( var row = 0 ; row < board.size; row++ ) {
         var life_counter = 4;

         if( color  == board.board[col][row].stonePlaced ) {

         // we check north south east and west 
         console.log("it gets here");

         // north
            if (col > 0){
               if (board.board[col -1][row].stonePlaced == opponent  ){
                  life_counter = life_counter -1;
                  }
               }


            // south 
            if (col < 7 ){
               if (board.board[col + 1][row].stonePlaced == opponent  ){
                  life_counter = life_counter -1;
                  }
               }

            //east 
            if (row  > 0 ) {
               if (board.board[col][row - 1].stonePlaced == opponent  ){
                  life_counter = life_counter -1;
                  }
               }


            //west 
            if (row  < 7 ){
               if (board.board[col][row + 1].stonePlaced == opponent  ){
                  life_counter = life_counter -1;
                  }
               }

            if( life_counter == 0 ){
               board.board[col][row].stonePlaced = "empty";
               prisoners = prisoners + 1;
               for (var i = 0; i < stones.length; stones++) {
			if (stones[i].stoneX == board[i][j].x && stones[i].stoneY == board[i][j].y) {
				stones.pop(i);
				return;
			}
               }

         }
        }

	}
	}
}

