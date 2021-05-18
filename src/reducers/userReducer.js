import types from '../types'

const initialState = {
  /* Default values here */
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.STORE_PAYLOAD:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
