import React from 'react'
import { connect } from 'react-redux'
import playerMove from '../state/playerMove'
import s from './disk.module.css'

const Disk = ({row, col, status, makePlayerMove}) => {
  // NOTE: css grid counts from 1
  const gridArea = `${row + 1} / ${col + 1} / span 1 / span 1`

  return (
    <div
      className={`${s.disk} ${statusClass(status)}`}
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

// visual representation of disk status
const statusClass = (status) => {
  switch(status) {
    case 1:
      return s.diskP1
    case 2:
      return s.diskP2
    default:
      return s.diskEmpty
  }
}

