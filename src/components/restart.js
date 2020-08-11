import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import s from './restart.module.css'

const Restart = (props) => {
  
  return (
    <button className={s.btn}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  )
}

export default Restart
