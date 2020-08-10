import React from 'react'
import Board from '../components/board'
import s from './index.module.css'

export default function Home() {
  return (
    <div className={s.indexPage}>
      <h1>Connect Four!</h1>
      <Board/>
    </div>
  )
}
