function isOutOfBounds (index, array) {
  return (!!(index < 0 || index > array.length - 1))
}

module.exports = isOutOfBounds
