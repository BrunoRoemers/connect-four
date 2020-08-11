import getWinningLines from './getWinningLines'

// NOTE: may contain duplicates
const getWinner = (lines) => {
  const winningLines = getWinningLines(lines)

  // no winner yet
  if (winningLines.length <= 0) return false

  // return winner
  return winningLines[0].player
}

export default getWinner
