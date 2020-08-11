import getWinningLines from './getWinningLines'

// NOTE: may contain duplicates
const getWinningDisks = (lines) => {
  const winningLines = getWinningLines(lines)

  return winningLines.flatMap(({disks}) => disks)
}

export default getWinningDisks
