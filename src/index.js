import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { newPost } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderAll = () => {
  root.render(
    <React.StrictMode>
      <App appData={state} newPost={newPost} />
    </React.StrictMode>
  );
}
rerenderAll();


reportWebVitals();
