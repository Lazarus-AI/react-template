import types from '../types'

const initialState = {
  database: {},
  firestore: {},
  storage: {},
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_FIREBASE_APP:
      return {
        ...state,
        database: action.payload.database,
        firestore: action.payload.firestore,
        storage: action.payload.storage,
      }
    default:
      return state
  }
}

