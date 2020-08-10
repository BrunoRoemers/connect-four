import React from 'react'
import { connect } from 'react-redux'
import s from './playerIndicator.module.css'

const PlayerIndicator = ({player, active}) => {


  return (
    <div className={cn(player, active)}>Player {player}</div>
  )
}

// redux
const mapStateToProps = ({currentPlayer}, {player}) => ({
  active: currentPlayer === player,
})

export default connect(mapStateToProps)(PlayerIndicator)

// turn data into classes
const cn = (player, active) => {
  const clx = [s.playerIndicator]

  if (player === 1) clx.push(s.p1)
  if (player === 2) clx.push(s.p2)

  if (active) clx.push(s.active)
  
  return clx.join(' ')
}
