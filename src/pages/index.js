import React from 'react'
import Board from '../components/board'
import PlayerIndicator from '../components/playerIndicator'
import Title from '../components/title'
import Undo from '../components/undo'
import Restart from '../components/restart'
import s from './index.module.css'

export default function Home() {
  return (
    <div className={s.indexPage}>
      <Title/>
      <div className={s.indicatorWpr}>
        <PlayerIndicator player={1}/>
        <Undo/>
        <Restart/>
        <PlayerIndicator player={2}/> 
      </div>
      <Board/>
    </div>
  )
}
