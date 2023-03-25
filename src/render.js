import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { addPost, updatePostText } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderAll = (state) => {
  root.render(
    <React.StrictMode>
      <App appData={state} addPost={addPost} updatePostText={updatePostText} />
    </React.StrictMode>
  );
}