function randomCellGen () {
  return Math.random() >  0.5 ? 1 : 0
}

function createBoard (size) {
  const board = []
  for(i=0; i < size; i++) {
    board.push(Array.from({length: size}, () => randomCellGen()))
    // console.log(...board[i])
  }
  return board

}

module.exports = createBoard