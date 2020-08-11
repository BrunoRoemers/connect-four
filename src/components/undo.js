import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import s from './undo.module.css'

const Undo = props => {
  return (
    <button className={s.btn}>
      <FontAwesomeIcon icon={faUndoAlt}/>
    </button>
  )
}

export default Undo
