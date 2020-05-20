// Action Creators are functions that return action objects
// There is no need to create action creators but it makes your code more modular and organizable
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(task) {
    return {
      type: ADD_TODO,
      task
    };
}
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
