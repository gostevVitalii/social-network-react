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
        <Navbar navbarData={props.appData.navbar} />
        <div className="appContent">
          <Routes>
            <Route path="/profile"
              element={<Profile
                profileData={props.appData.profilePage}
                dispatch={props.dispatch}
              />} />
            <Route path="/messages"
              element={<Messages
                dialogsData={props.appData.dialogsPage} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
