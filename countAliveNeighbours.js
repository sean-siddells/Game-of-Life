const getNeighbours = require ('./getNeighbours')
const createBoard = require('./createBoard')
const getValues = require ('./getValues')
const testBoard = createBoard(5)

function countAliveNeighbours (rowIndex, columnIndex, board) {
  let aliveNeighbours = 0
  const neighboursArr = getNeighbours(rowIndex, columnIndex, board)
  const valueArr = getValues(neighboursArr, board)
  valueArr.map(value => value === 1 ? aliveNeighbours ++ : null)
  console.log('this is aliveNeighbour count: ', aliveNeighbours)
  return aliveNeighbours
}

countAliveNeighbours(3,4, testBoard)
module.exports = countAliveNeighbours
