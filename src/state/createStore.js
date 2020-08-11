import {
  createStore as reduxCreateStore,
  compose,
  combineReducers
} from 'redux'
import undoable from 'redux-undo'
import createReducer from './createReducer'
import getLines from '../helpers/getLines'
import getWinner from '../helpers/getWinner'
import getWinningDisks from '../helpers/getWinningDisks'

const playerMove = (state, {row, col}) => {
  const {disks, currentPlayer} = state

  // disk already taken
  if (disks[row][col].player !== false) return state

  // gravity
  // NOTE: disks are counted from top left
  for (row = disks.length -1; disks[row][col].player !== false; row--);
  
  // clone disks (immutable)
  const newDisks = disks.map(row => [...row])
  
  // update disk
  newDisks[row][col] = {
    ...newDisks[row][col],
    player: currentPlayer,
  }

  // lines
  const lines = getLines(disks, row, col, currentPlayer)
  
  // highlight winning lines
  const winningDisks = getWinningDisks(lines)
  for (const disk of winningDisks) {
    newDisks[disk.row][disk.col] = {
      ...newDisks[disk.row][disk.col],
      highlight: true,
    }
  }

  return {
    ...state,

    disks: newDisks,
    winner: getWinner(lines),

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
  winner: false, // see player values
  currentPlayer: 1,
}

const gameReducer = createReducer(initState, {
  PLAYER_MOVE: playerMove,
})

const rootReducer = combineReducers({
  game: undoable(gameReducer),
})

const debugEnhancer = () => {
  // window not available during build
  if (typeof window === 'undefined') return compose

  return window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
}


const createStore = () =>
  reduxCreateStore(
    rootReducer,
    debugEnhancer(),
  )
export default createStore
