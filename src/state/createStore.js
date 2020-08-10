import { createStore as reduxCreateStore } from 'redux'
import createReducer from './createReducer'

const playerMove = (state, {row, col}) => {
  // state immutable
  const newDisks = [...state.disks]
  newDisks[row] = [...state.disks[row]]

  // update disk
  newDisks[row][col] = {
    ...newDisks[row][col],
    status: state.currentPlayer,
  }

  return {
    ...state,

    disks: newDisks,

    // toggle player 1 and 2
    currentPlayer: state.currentPlayer === 1 ? 2 : 1,
  }
}

const initState = {
  // 6 rows x 7 columns
  disks: new Array(6).fill(
    new Array(7).fill({status: 0})
  ),
  currentPlayer: 1,
}

const reducer = createReducer(initState, {
  PLAYER_MOVE: playerMove,
})

const createStore = () =>
  reduxCreateStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
export default createStore
