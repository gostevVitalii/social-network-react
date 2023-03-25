import { rerenderAll } from "../render";

let state = {
  navbar: [
    { to: '/profile', text: 'profile' },
    { to: '/messages', text: 'messages' },
    // { to: '/news', text: 'news' },
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
  },
  dialogsPage: {
    messages: [
      { text: "First" },
      { text: "Second" },
      { text: "Hey there" },
    ],
  }
}

export let addPost = (postText) => {
  let newPost = {
    id: 5,
    text: postText,
    likes: 0
  }
  state.profilePage.posts.push(newPost)
  rerenderAll(state)

}


export default state;