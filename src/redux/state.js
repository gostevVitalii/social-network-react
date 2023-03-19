let state = {
  navbar: [
    { to: '/profile', text: 'profile' },
    { to: '/messages', text: 'messages' },
    { to: '/news', text: 'news' },
  ],
  profilePage: {
    avatar: "avatar",
    name: "Vitaliy",
    description: "beginner js developer",
    posts: [
      { text: "Hey there" },
      { text: "Here is my second post" },
      { text: "Just for fun" },
    ]

  },

}

export let newPost = (text) => {

  alert(text)
}

export default state;