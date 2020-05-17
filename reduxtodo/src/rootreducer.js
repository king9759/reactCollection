//the reducer function that creates the store initially
import { ADD_TODO, REMOVE_TODO } from './actionCreator';
const initialState = {
  todos: ["Last Task"],
};
export default function rootReducer( state = initialState, action){
  switch (action.type) {
    case ADD_TODO:
      console.log(action.task);
      var modifiedState = {...state};
      modifiedState.todos.push(action.task);
      console.log(modifiedState.todos);
      return modifiedState;
    case REMOVE_TODO:
        var modifiedState = {...state};
        modifiedState.todos = modifiedState.todos.filter(task=> task!== action.task);
        return modifiedState;
    default:
      return state;
  }
}


// default export allows exporting only one function or class
