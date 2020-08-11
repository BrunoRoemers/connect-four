import React from 'react'
import Disk from './disk'
import { connect } from 'react-redux'
import s from './board.module.css'

const mapStateToProps = ({disks}) => ({
  disks,
})

export default connect(mapStateToProps, null)(Board)

function Board({disks: diskData}) {
  return (
    <div className={s.board}>
      {/* map 2d array to Disk components and flatten */}
      {diskData.flatMap((row, rid) => row.map(({ player }, cid) => (
        <Disk row={rid} col={cid} player={player} key={`${rid}_${cid}`}/>
      )))}
    </div>
  )
}
