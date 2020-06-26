import * as types from '../constants/ActionTypes';//THis line imports all the actiontypes from the file inside constants
let messageId = 0;
const nextUserId = 0;

export const addMessage = (message, author) => ({//send a new message
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  author
})

export const addUser = (name) => ({//add user
  type: types.ADD_USER,
  id: nextUserId++,
  name,
})

export const messageReceived = (message,author) => ({//message received by other users
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  author
})

export const populateUsersList = users => ({//initialise the app
  type: types.USERS_LIST,
  users
})
