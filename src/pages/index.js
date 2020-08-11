import React from 'react'
import Board from '../components/board'
import PlayerIndicator from '../components/playerIndicator'
import Title from '../components/title'
import Undo from '../components/undo'
import Reset from '../components/reset'
import s from './index.module.css'

export default function Home() {
  return (
    <div className={s.indexPage}>
      <Title/>
      <div className={s.indicatorWpr}>
        <PlayerIndicator player={1}/>
        <Undo/>
        <Reset/>
        <PlayerIndicator player={2}/> 
      </div>
      <Board/>
    </div>
  )
}
