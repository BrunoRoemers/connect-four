import findNeighbors from './findNeighbors'

const isWinningMove = (disks, row, col, status) => {
  // init
  let targets = [{ row, col }]
  let depth = 0

  while (targets.length > 0) {
    // update depth
    depth++

    // neighbors become targets for next iteration
    targets = targets.flatMap(({ row, col, offset }) => {
      offset = offset ? [offset] : undefined
      return findNeighbors(disks, row, col, status, offset)
    })

    console.log(targets)
    console.log(depth)
  }

  return depth >= 4
}

export default isWinningMove
