const createReducer = (initState, handlers) => (state = initState, action) => {
  // handler not found
  if (!handlers.hasOwnProperty(action.type)) return state
  
  // call handler
  return handlers[action.type](state, action)
}

export default createReducer
