import React from 'react'
import Board from '../components/board'
import PlayerIndicator from '../components/playerIndicator'
import s from './index.module.css'

export default function Home() {
  return (
    <div className={s.indexPage}>
      <h1>Connect Four!</h1>
      <div className={s.indicatorWpr}>
        <PlayerIndicator player={1}/>
        <PlayerIndicator player={2}/> 
      </div>
      <Board/>
    </div>
  )
}
