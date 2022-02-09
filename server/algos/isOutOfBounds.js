function isOutOfBounds (index, array) {
  return (index < 0 || index > array.length - 1 ? true : false)
}

module.exports = isOutOfBounds
