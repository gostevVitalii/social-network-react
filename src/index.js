import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let navbarData = [
  { to: '/profile', text: 'profile' },
  { to: '/messages', text: 'messages' },
  { to: '/news', text: 'news' },
]
let profileData = {
  avatar: "avatar",
  name: "Vitaliy",
  description: "beginner js developer",
  posts: [
    { text: "Hey there" },
    { text: "Here is my second post" },
    { text: "Just for fun" },
  ]
}
const dataBase = {
  navbar: navbarData,
  profile: profileData,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={dataBase} />
  </React.StrictMode>
);

reportWebVitals();
