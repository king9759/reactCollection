//the reducer function that creates the store initially
import { ADD_TODO, REMOVE_TODO, GET_TODOS } from './actionCreator';
const initialState = {
  todos: [],
};
export default function rootReducer( state = initialState, action){
  switch (action.type) {
    case GET_TODOS:
      return {...state, todos: action.data};//the previous state format and todos fetched from the database
    case ADD_TODO:
      var modifiedState = {...state};
      modifiedState.todos.push(action.task);
      return modifiedState;
    case REMOVE_TODO:
        modifiedState = {...state};
        modifiedState.todos = modifiedState.todos.filter(task=> task._id!== action.task);
        return modifiedState;
    default:
      return state;
  }
}


// default export allows exporting only one function or class
