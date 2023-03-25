let rerenderAll = () => {
  console.log('State was changed')
}

let state = {
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
}

export const addPost = () => {
  let newPost = {
    id: 5,
    text: state.profilePage.newPostText,
    likes: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderAll(state)
}
export const updatePostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderAll(state)
}
export const subscribe = (observer) => {
  rerenderAll = observer

}


export default state;