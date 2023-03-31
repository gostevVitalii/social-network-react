import dialogsReducer from "./dialogs-reducer"
import navbarReducer from "./navbar-reducer"
import profileReducer from "./profile-reducer"

let store = {
  _state: {
    navbar: [
      { to: '/profile', text: 'profile' },
      { to: '/messages', text: 'messages' },
    ],
    profilePage: {
      avatar: "avatar",
      name: "Vitaliy",
      description: "beginner js developer",
      posts: [
        { text: "Hey there", id: 1, likes: 0 },
        { text: "Here is my second post", id: 2, likes: 0 },
        { text: "Just for fun", id: 3, likes: 0 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      messages: [
        { text: "First" },
        { text: "Second" },
        { text: "Hey there" },
      ],
      newMessage: "",
    }
  },
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log('State was changed')
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.navbar = navbarReducer(this._state.navbar, action)
    this._callSubscriber(this._state)
  }
}


export default store
window.store = store