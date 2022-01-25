const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')
const createBoard = require('./createBoard')
const getNeighbours = require('./getNeighbours')

const board = createBoard (5)

function nextBoard (currentBoard) {
  let newBoard = [...currentBoard]
    currentBoard.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        const aliveNeighbours = countAliveNeighbours(cellIndex, rowIndex, board)
        console.log('this is aliveNeighbours:', aliveNeighbours)
      })

    )
}

nextBoard(board)

module.exports = nextBoard
