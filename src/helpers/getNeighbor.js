const getNeighbor = (grid, row, col, player, offset) => {
  // coordinates to be tested
  const checkRow = row + offset[0]
  const checkCol = col + offset[1]

  // guard grid bounds
  if (checkRow < 0 || checkRow >= grid.length) return null
  if (checkCol < 0 || checkCol >= grid[0].length) return null

  // not a neighbor
  if (grid[checkRow][checkCol].player !== player) return null

  // return neighbor data
  return {
    row: checkRow,
    col: checkCol,
    offset,
  }
}

export default getNeighbor
