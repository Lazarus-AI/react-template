import types from '../types'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/storage'
import firebaseConfig from '../config'

export const createFirebaseApp = () => (dispatch) => {
  const firebaseApp = !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) :
  firebase.app()

  const firebaseAppPayload = {
    database: firebaseApp.database(),
    firestore: firebaseApp.firestore(),
    storage: firebaseApp.storage(),
  }

  dispatch({
    type: types.CREATE_FIREBASE_APP,
    payload: firebaseAppPayload,
  })
}