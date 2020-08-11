import React from 'react'
import { connect } from 'react-redux'
import playerMove from '../state/playerMove'
import s from './disk.module.css'

const Disk = ({row, col, player, makePlayerMove}) => {
  // NOTE: css grid counts from 1
  const gridArea = `${row + 1} / ${col + 1} / span 1 / span 1`

  return (
    <div
      className={`${s.disk} ${playerClass(player)}`}
      style={{gridArea: gridArea}}
      onClick={makePlayerMove(row, col)}
    >
    </div>
  )
}

// redux
const mapDispatchToProps = dispatch => ({
  makePlayerMove: (row, col) => () => dispatch(playerMove(row, col)),
})

export default connect(null, mapDispatchToProps)(Disk)

// visual representation of disk
const playerClass = (player) => {
  switch(player) {
    case 1:
      return s.diskP1
    case 2:
      return s.diskP2
    default:
      return s.diskEmpty
  }
}

