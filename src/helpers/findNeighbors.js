// row, col index offset wrt input
const allOffsets = [
  [-1, -1],
  [-1,  0], // never disk directly above current disk?
  [-1,  1],
  [ 0,  1],
  [ 1,  1],
  [ 1,  0],
  [ 1, -1],
  [ 0, -1],
]

// NOTE: a neighbor is a directly adjacent disk (inc diagonals) with matching status
const findNeighbors = (grid, row, col, status, offsets = allOffsets) => {
  let neighbors = []

  for (const offset of offsets) {
    // coordinates to be tested
    const checkRow = row + offset[0]
    const checkCol = col + offset[1]

    // guard grid bounds
    if (checkRow < 0 || checkRow >= grid.length) continue
    if (checkCol < 0 || checkCol >= grid[0].length) continue

    // add neighbors to output
    if (grid[checkRow][checkCol].status === status) {
      neighbors.push({
        row: checkRow,
        col: checkCol,
        offset,
      })
    }
  }

  return neighbors
}

export default findNeighbors
