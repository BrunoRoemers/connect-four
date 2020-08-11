import React from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import s from './undo.module.css'

const Undo = ({undo}) => {
  return (
    <button className={s.btn} onClick={undo}>
      <FontAwesomeIcon icon={faUndoAlt}/>
    </button>
  )
}

const mapDispatchToProps = dispatch => ({
  undo: () => dispatch(ActionCreators.undo()),
})

export default connect(null, mapDispatchToProps)(Undo)
