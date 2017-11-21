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
function capture( board , color ) {
   var opponent = 0;
   var prisoners = 0;

   if( color == 1 ){
      opponent = 2;
   } else{
      opponent = 1;
   }



   for ( var col = 0 ; col < board.length; col++ ) {

      for ( var row = 0 ; row < board.length; row++ ) {
         var life_counter = 4;

         if( color == board[col][row] ) {

         // we check north south east and west 

         // north
            if (col > 0){
               if (board[col -1][row] == opponent  ){
                  life_counter = life_counter -1;
                  }
               }


            // south 
            if (col < 7 ){
               if (board[col + 1][row] == opponent  ){
                  life_counter = life_counter -1;
                  }
               }

            //east 
            if (row  > 0 ){
               if (board[col][row - 1] == opponent  ){
                  life_counter = life_counter -1;
                  }
               }


            //west 
            if (row  < 7 ){
               if (board[col][row + 1] == opponent  ){
                  life_counter = life_counter -1;
                  }
               }

            if( life_counter == 0 ){
               board[col][row] == 2
               prisoners = prisoners + 1;
               }

         }
        }

}



return prisoners;

}


print(capture( board , 1 ));
