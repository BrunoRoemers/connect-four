import { createStore as reduxCreateStore, compose } from 'redux'
import createReducer from './createReducer'
import getLines from '../helpers/getLines'
import getWinningLines from '../helpers/getWinningLines'

const playerMove = (state, {row, col}) => {
  const {disks, currentPlayer} = state

  // disk already taken
  if (disks[row][col].player !== false) return state

  // gravity
  // NOTE: disks are counted from top left
  for (row = disks.length -1; disks[row][col].player !== false; row--);
  
  // state immutable
  const newDisks = [...disks]
  newDisks[row] = [...disks[row]]
  
  // update disk
  newDisks[row][col] = {
    ...newDisks[row][col],
    player: currentPlayer,
  }

  // lines
  const lines = getLines(disks, row, col, currentPlayer)

  console.log(lines)

  if (getWinningLines(lines).length > 0) console.log('win!')

  return {
    ...state,

    disks: newDisks,

    // toggle player 1 and 2
    currentPlayer: currentPlayer === 1 ? 2 : 1,
  }
}

const initState = {
  // 6 rows x 7 columns
  disks: new Array(6).fill(
    new Array(7).fill({
      // data for a single disk
      player: false, // false (no player), 1 (player 1), 2 (player 2)
      highlight: false,
    })
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
