import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

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


function App() {
  return (
    <BrowserRouter>
      <div class="App-wrap">
        <Header />
        <Navbar data={dataBase.navbar} />
        <div className="appContent">
          <Routes>
            <Route path="/profile" element={<Profile data={dataBase.profile} />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
