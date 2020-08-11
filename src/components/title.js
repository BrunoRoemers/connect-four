import React from 'react'
import { connect } from 'react-redux'

const Title = ({winner}) => {
  let text = 'Connect Four!'

  if (winner) text = `Player ${winner} won!`

  return (<h1>{text}</h1>)

}

const mapStateToProps = (state) => ({
  winner: state.game.present.winner,
})


export default connect(mapStateToProps)(Title)
