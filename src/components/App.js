// Dependencies'
import React, {useState, useEffect, Fragment} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import Helpers from '../Helpers.js'

// Actions
import {createFirebaseApp} from '../actions/createFirebaseApp'
import {storePayload} from '../actions/storePayload'

// Components
import {Notification} from '@anishp16/lazarus-cds'

// Images
import Check from '../images/check.svg'
import Warning from '../images/warning.svg'

// Styles
import '@anishp16/lazarus-cds/dist/index.css'
import '../styles/App.css'

function App(props) {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true)

  /* animates notification */
  const onClickNotification = () => {
    setIsNotificationVisible(false)
    setTimeout(() => {
      props.storePayload({
        userMessage: null,
        notificationType: null,
        notificationIcon: null,
      })
      setIsNotificationVisible(true)
    }, 300)
  }

  /* Show Welcome message on component mount */
  useEffect(() => {
    props.storePayload({
      userMessage: 'Welcome!',
      notificationType: 1,
      notificationIcon: 'check',
    })
  }, [])

  /* Automatically close type 2 notifications */
  useEffect(() => {
    if (props.notificationType === 2) {
      setTimeout(onClickNotification, 10000)
    }
  }, [props.notificationType])

  return (
    <Fragment>
      {props.userMessage &&
        <Notification
          type={props.notificationType || 1}
          image={props.notificationIcon === 'check' ? Check : Warning}
          message={props.userMessage}
          time={Helpers.timeStampToTime(Date.now())}
          isVisible={isNotificationVisible}
          onClick={onClickNotification}
        />
      }
    <div className="App">
      {/* Routes */}
    </div>
    </Fragment>
  )
}

const mapStateToProps = (state, ownProps) => ({
  cookies: ownProps.cookies,
  storage: state.firebaseReducer.storage,
  database: state.firebaseReducer.database,
  firestore: state.firebaseReducer.firestore,
  userMessage: state.userReducer.userMessage,
  notificationType: state.userReducer.notificationType,
  notificationIcon: state.userReducer.notificationIcon,
})

export default connect(
    mapStateToProps,
    {createFirebaseApp, storePayload},
)(App)
