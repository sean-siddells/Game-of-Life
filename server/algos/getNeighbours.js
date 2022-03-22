const indicesAreOutOfBounds = require('./indicesAreOutOfBounds')
const createBoard = require('./createBoard')

// const testBoard = createBoard(5)
// console.log('this is testBoard', testBoard)

// 3 different situations- centre piece, corner piece, side piece
function getNeighbours (cellRow, cellColumn, board) {
  const neighboursArr = []
  board.map((rows, x) => {
    if (x === cellRow) {
      rows.map((cell, y) => {
        if (y === cellColumn) {
          neighboursArr.push([x - 1, y - 1], [x - 1, y], [x - 1, y + 1], [x, y - 1], [x, y + 1], [x + 1, y - 1], [x + 1, y], [x + 1, y + 1])
        }
      })
    }
  })
  const neighboursArrFinal = neighboursArr.filter(element => indicesAreOutOfBounds(element[0], element[1], board) === false)
  // console.log('this is neigboursArr: ', neighboursArrFinal)
  // console.log('this is currentCell value: ', currentCellValue)
  return neighboursArrFinal
}

module.exports = getNeighbours
