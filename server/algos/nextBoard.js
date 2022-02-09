const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')
const createBoard = require('./createBoard')
const displayBoard = require('./displayBoard')

const board = createBoard(5)

function nextBoard (currentBoard) {
  let newBoard = []
  for (let i = 0; i < currentBoard.length; i++) {
    newBoard[i] = currentBoard[i].slice()
  }
  currentBoard.map((row, rowIndex) =>
    row.map((cell, cellIndex) => {
      const aliveNeighbours = countAliveNeighbours(cellIndex, rowIndex, currentBoard)
      newBoard[cellIndex][rowIndex] = nextCellState(cell, aliveNeighbours)
    })
  )
  console.log('this is currentBoard: ', currentBoard)
  console.log('this is newBoard: ', newBoard)
  return newBoard
}

nextBoard(board)

module.exports = nextBoard
