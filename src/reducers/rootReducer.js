import {combineReducers} from 'redux'
import firebaseReducer from './firebaseReducer'
import userReducer from './userReducer'

const appReducer = combineReducers({
  firebaseReducer: firebaseReducer,
  userReducer: userReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_STORE') {
    state = {
      ...state,
      userReducer: undefined,
      // firebaseReducer: state.firebaseReducer,
    }
  }
  return appReducer(state, action)
}

export default rootReducer
