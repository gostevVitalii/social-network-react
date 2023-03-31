const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
  avatar: "avatar",
  name: "Vitaliy",
  description: "beginner js developer",
  posts: [
    { text: "Hey there", id: 1, likes: 0 },
    { text: "Here is my second post", id: 2, likes: 0 },
    { text: "Just for fun", id: 3, likes: 0 },
  ],
  newPostText: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        text: state.newPostText,
        likes: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText
      return state
    default:
      return state
  }
}

export const newPostCreator = () => ({
  type: ADD_POST
})
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer