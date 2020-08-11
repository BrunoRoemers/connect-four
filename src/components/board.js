import React from 'react'
import Disk from './disk'
import { connect } from 'react-redux'
import playerMove from "../state/playerMove"
import s from './board.module.css'

const Board = ({diskData, winner, makePlayerMove}) => {
  return (
    <div className={s.board}>
      {/* map 2d array to Disk components and flatten */}
      {diskData.flatMap((row, rid) =>
        row.map(({ player, highlight }, cid) => (
          <Disk
            row={rid}
            col={cid}
            player={player}
            highlight={highlight}
            key={`${rid}_${cid}`}
            onClick={makePlayerMove(rid, cid)}
          />
        ))
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  diskData: state.game.present.disks,
  winner: state.game.present.winner,
})

const mapDispatchToProps = dispatch => ({
  makePlayerMove: (row, col) => () => dispatch(playerMove(row, col)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
