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
  dispatch(action) {
    switch (action.type) {
      case "ADD-POST":
        this._addPost()
        break;
      case "UPDATE-NEW-POST-TEXT":
        this._updatePostText(action.newText)
        break;
      default:

        break;
    }
  }

}

export default store
window.store = store