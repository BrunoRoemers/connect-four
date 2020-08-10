import { createStore as reduxCreateStore, compose } from 'redux'
import createReducer from './createReducer'

const playerMove = (state, {row, col}) => {
  const {disks} = state

  // disk already taken
  if (disks[row][col].status !== 0) return state

  // gravity
  // NOTE: disks are counted from top left
  for (row = disks.length -1; disks[row][col].status !== 0; row--);
  
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

const debugEnhancer = () => {
  // window not available during build
  if (typeof window === 'undefined') return compose

  return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}


const createStore = () =>
  reduxCreateStore(
    reducer,
    debugEnhancer(),
  )
export default createStore
