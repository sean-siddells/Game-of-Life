function displayBoard (board) {
  // eslint-disable-next-line no-console
  const displayBoard = []
  for(i=0; i < board.length; i++) {
    displayBoard.push(Array.from({length: board.length}, board[i].splice()))
    console.log(...board[i])
  }
  return board
}

module.exports = displayBoard
