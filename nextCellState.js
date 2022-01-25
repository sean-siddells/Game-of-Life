const isOverPopulated = require('./isOverPopulated')
const isUnderPopulated = require('./isUnderPopulated')
const isRessurectable = require('./isRessurectable')

function nextCellState (cellState, neighbourCount) {
  if (isOverPopulated(neighbourCount) === true && cellState === 1) {
    return 0
  } else if (isUnderPopulated(neighbourCount) === true && cellState === 1) {
    return 0
  } else if (isRessurectable(neighbourCount) === true) {
    return 1
  } else return 0
}

module.exports = nextCellState
