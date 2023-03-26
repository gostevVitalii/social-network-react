const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        text: state.newMessage,
      }
      state.messages.push(newMessage)
      state.newMessage = ''
      return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessage = action.newText
      return state
    default:
      return state
  }
}
export default dialogsReducer