var Tile = function(x, y) {
        this.x = x;
        this.y = y;
        this.drawTile = function() {
                fill(242, 176, 109);
                stroke(0);
                rect(this.x, this.y, 50, 50);
        }
}   
