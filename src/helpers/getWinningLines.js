const getWinningLines = (lines) => lines
  .filter(({disks}) => disks.length >= 4)

export default getWinningLines
