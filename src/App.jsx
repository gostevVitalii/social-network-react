import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <div class="App-wrap">
        <Header />
        <Navbar />
        <div className="appContent">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
