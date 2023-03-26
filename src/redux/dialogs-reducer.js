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

export const newMessageCreator = () => ({
  type: ADD_MESSAGE
})
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text
})

export default dialogsReducer