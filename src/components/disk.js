import React from 'react'
import s from './disk.module.css'

const Disk = ({row, col, player, highlight, onClick}) => {
  // NOTE: css grid counts from 1
  const gridArea = `${row + 1} / ${col + 1} / span 1 / span 1`

  return (
    <div
      className={cn(player, highlight)}
      style={{gridArea: gridArea}}
      onClick={onClick}
    >
    </div>
  )
}

export default Disk

// css classes
const cn = (player, highlight) => {
  const clx = [s.disk]

  // player
  if (player === 1)       clx.push(s.diskP1)
  else if (player === 2)  clx.push(s.diskP2)
  else                    clx.push(s.diskEmpty)

  // highlight
  if (highlight) clx.push(s.highlight)

  return clx.join(' ')
}

