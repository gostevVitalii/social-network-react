import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import state from './redux/state'
import { subscribe, addPost, updatePostText } from './redux/state'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderAll = (state) => {
  root.render(
    <React.StrictMode>
      <App appData={state} addPost={addPost} updatePostText={updatePostText} />
    </React.StrictMode>
  );
}
rerenderAll(state)
subscribe(rerenderAll)
reportWebVitals()
