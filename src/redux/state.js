//Action types:
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

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
  _addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText,
      likes: 0
    }
    this._state.profilePage.posts.push(newPost)
    this._state.profilePage.newPostText = ''
    this._callSubscriber(this._state)
  },
  _updatePostText(newText) {
    this._state.profilePage.newPostText = newText
    this._callSubscriber(this._state)
  },
  _addMessage() {
    let newMessage = {
      text: this._state.dialogsPage.newMessage,
    }
    this._state.dialogsPage.messages.push(newMessage)
    this._state.dialogsPage.newMessage = ''
    this._callSubscriber(this._state)
  },
  _updateMessageText(newText) {
    this._state.dialogsPage.newMessage = newText
    this._callSubscriber(this._state)
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this._addPost()
        break;
      case UPDATE_NEW_POST_TEXT:
        this._updatePostText(action.newText)
        break;
      case ADD_MESSAGE:
        this._addMessage()
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this._updateMessageText(action.newText)
        break;
      default:

        break;
    }
  }
}

//Action creators
export const newPostCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})
export const newMessageCreator = () => ({
  type: ADD_MESSAGE
})
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
})

export default store
window.store = store