import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';




function App(props) {
  return (
    <BrowserRouter>
      <div class="App-wrap">
        <Header />
        <Navbar data={props.data.navbar} />
        <div className="appContent">
          <Routes>
            <Route path="/profile" element={<Profile data={props.data.profile} />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
