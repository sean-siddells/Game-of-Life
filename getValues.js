function getValues(arr, board) {
  const values = []
  arr.map(x => {
    values.push(board[x[0]][x[1]])
  })
  console.log('this is values: ', values)
  return values
}

module.exports = getValues