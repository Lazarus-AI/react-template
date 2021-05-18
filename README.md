REACT COMPONENTS:

We are moving towards using exclusively functional (instead of class) components, using React hooks to store state (useState)
and to listen for changes in dependencies (useEffect instead of lifecycle methods such as ComponentWillRecieveProps).

Please leave a comment before defining a component describing what it is and what it does.

    Example:
    // Dependencies
    import React, {useState} from 'react'
    
    // Styles
    import '../styles/PopUpTab.css'

    /*  Renders a clickable tab
        Clicking it allows user to toggle isFooBar
    */

    function PopUpTab(props) {
      const [isFooBar, setIsFooBar] = useState(false)
      return (
        <div
          className='popUpTab'
          onClick={() => setIsFooBar(!isFooBar)}
        />
      )
    }

    export default PopUpTab



REDUX:

State only used by a component or its direct children is stored locally in component using the 'useState' method. State that is
or might be used by multiple components is stored using Redux.

To store state globally with redux, use the storePayload action in src/actions. This action will store values through whichever
reducer has a case for 'STORE_PAYLOAD' (e.g. userReducer).

    Example:
    props.storePayload({foo: 'bar'})

Global state saved through redux is accessed in a component with the 'mapStateToProps' function. This function is the first
argument in the 'connect' method from react-redux. The second argument is all the actions being used by the component.

    Example:
    export default connect(mapStateToProps, {storePayload})(App)

Actions other than storePayload are typically used for HTTP requests that result in a value being stored to global state.
Actions use 'redux-thunk' middleware to use logic followed by a 'dispatch' of the data to be stored.

    Example:
    export const postDataAction = (dataToPost) => (dispatch) => {
      const url = process.env.REACT_APP_URL + 'endPoint'
      fetch(url, {method: 'POST', body: dataToPost})
          .then((res) => {
            if (res.ok) {
              dispatch({
                type: 'STORE_PAYLOAD',
                payload: {
                  userMessage: 'success',
                  notificationType: 2,
                  notificationIcon: 'check',
                },
              })
            }
          })
    }



ENVIRONMENTAL VARIABLES:

API keys and api urls that change from development to production are stored in a .env file. DO NOT PUSH .ENV FILE!
Add .env to .gitignore file
    
    Example:
    REACT_APP_PDF_URL=http://pdf-url.com
    REACT_APP_API_KEY=foobar



CSS:

With rare exeception, the only component library we use is our own. PLEASE DO NOT USE A 3rd PARTY COMPONENT LIBRARY WITHOUT
PERMISSION!

Each component should have its own CSS file in src/styles. Css used for multiple components is in index.css. Use specific
names for classes and use a specific selector if the class has a generic name.

    Example:
    #login-form .tab {
      margin: 1em;
    }



COMPONENT LIBRARY:

Our component library is deployed here:
https://componentlibrary.web.app/

The repository is here:
https://github.com/Lazarus-AI/Component-Lib

To use the published npm package of our component library,
run 'npm install @anishp16/lazarus-cds'

    Example component import:
    import {Notification} from '@anishp16/lazarus-cds'
    import '@anishp16/lazarus-cds/dist/index.css'
    
To use local version of component library,
run 'npm link' in Component-Lib
run 'npm link Component-Lib' in your application directory
run 'npm start' in Component-Lib
run 'npm start' in application directory
