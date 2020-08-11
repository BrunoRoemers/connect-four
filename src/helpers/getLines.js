import getNeighbor from './getNeighbor'

// offsets for x, y and diagonals
// NOTE: also invert offsets for bidirectional search
const directions = [
  [ 0, -1], // horizontal
  [-1,  0], // vertical
  [-1,  1], // rising diagonal
  [-1, -1], // decending diagonal
]

const getLines = (grid, row, col, player) => directions.map(o1 => {
  // opposite direction
  const o2 = o1.map(i => -i)

  // start point always part of line
  let line = [{row, col}]

  // extend line outward from start point
  let terminals = [
    { row, col, offset: o1 },
    { row, col, offset: o2 },
  ]

  while (terminals.length > 0) {
    // move terminals outward until no neighbors can be found
    terminals = terminals
      .flatMap(({row, col, offset}) => getNeighbor(grid, row, col, player, offset))
      .filter(n => n) // remove falsish values

    // add confirmed terminals to line
    // NOTE: remove offsets from output
    line = terminals.map(({row, col}) => ({row, col})).concat(line)
  }


  return {
    offsets: [o1, o2],
    disks: line,
    player,
  }
})

export default getLines
