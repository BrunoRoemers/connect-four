import React, { useState } from 'react'
import Disk from './disk'
import { connect } from 'react-redux'
import { useSpring, a } from 'react-spring'
import playerMove from "../state/playerMove"
import s from './board.module.css'

const Board = ({diskData, winner, makePlayerMove}) => {
  const [toggle, setToggle] = useState(false)
  const {anim} = useSpring({
    anim: toggle ? 0 : 1,
    config: {
      tension: 400,
      friction: 17,
    }
  })

  const handleClick = (row, col) => () => {
    // wiggle board each click when game over
    if (winner) return setToggle(toggle => !toggle)

    makePlayerMove(row, col)
  }

  return (
    <a.div
      className={s.board}
      style={{translate: anim.interpolate({
        range: [0, 0.5, 1],
        output: ['0px', '7px', '0px'],
      })}}
    >
      {/* map 2d array to Disk components and flatten */}
      {diskData.flatMap((row, rid) =>
        row.map(({ player, highlight }, cid) => (
          <Disk
            row={rid}
            col={cid}
            player={player}
            highlight={highlight}
            key={`${rid}_${cid}`}
            onClick={handleClick(rid, cid)}
          />
        ))
      )}
    </a.div>
  )
}

const mapStateToProps = state => ({
  diskData: state.game.present.disks,
  winner: state.game.present.winner,
})

const mapDispatchToProps = dispatch => ({
  makePlayerMove: (row, col) => dispatch(playerMove(row, col)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
