import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderAll = (state) => {
  root.render(
    <React.StrictMode>
      <App appData={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
}
rerenderAll(store.getState())
store.subscribe(rerenderAll)

reportWebVitals()
