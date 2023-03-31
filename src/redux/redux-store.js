import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import navbarReducer from "./navbar-reducer"
import { configureStore } from '@reduxjs/toolkit'

let store = configureStore({
  reducer: {
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
  }
});
export default store;