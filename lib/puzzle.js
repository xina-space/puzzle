// select all the tiles
const tiles = document.querySelectorAll('td');

// check if a tile have an empty neighbour
const canMove = (tile) => {
  const tileColumn = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  const emptyTile = document.querySelector('.empty');
  const emptyTileColumn = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;

  return (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1);
};

// Move the tile
const moveTile = (element) => {
  // select the empty place
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerHTML = element.innerHTML;
  emptyTile.classList.remove('empty');
  element.innerHTML = '';
  element.classList.add('empty');
};

// const checkIfPlayerWins = () => {
//   const tilesOrder = Array.from(document.querySelectorAll('td')).map(e => Number.parseInt(e.innerHTML, 10));
//   if (tilesOrder.join() === "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,NaN") {
//     alert("Laimejai!");
//   }
// };


// add event listener on each tiles
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
