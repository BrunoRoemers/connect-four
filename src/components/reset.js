import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons"
import s from './reset.module.css'

const Reset = ({reset}) => {
  
  return (
    <button className={s.btn} onClick={reset}>
      <FontAwesomeIcon icon={faSyncAlt} />
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  reset: () => {
    dispatch({type: 'GAME_RESET'})
    dispatch(ActionCreators.clearHistory())
  }
})

export default connect(null, mapDispatchToProps)(Reset)
