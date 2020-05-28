// Action Creators are functions that return action objects
// There is no need to create action creators but it makes your code more modular and organizable
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const GET_TODOS = "GET_TODOS";

function handleTodos(data){
  return {
    type: "GET_TODOS",
    data: data
  };
}

function handleAdd(task){
  return{
    type: ADD_TODO,
    task:task
  }
}

function handleRemove(id){
  return{
    type: "REMOVE_TODO",
    id: id
  }
}

export function getTodos(){
  return dispatch => {//This is returning a function with dispatch function as parameter(input) which is called inside the blocks
    return fetch('http://localhost:3000/api/todos')//This line will fetch the data from api
           .then(res => res.json())//This converts the data to json format
           .then(data => dispatch(handleTodos(data)))//This calls handleTodos which returns an action object and calls dispatch
           .catch(err => dispatch(err));//This calls dispatch with err object
  };
}

export function addTodo(task){
  return dispatch => {
    return fetch('http://localhost:3000/api/todos/new',{
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),//This tells that the body is in json format
      body: JSON.stringify({task})
    }).then(res => res.json())
    .then(data => dispatch(handleAdd(data)))
    .catch(err => dispatch(err))
  };
}
export function removeTodo(id){
  return dispatch => {
    return fetch(`http://localhost:3000/api/todos/{$id}`,{
      method: "DELETE",
    }).then(res => res.json())
    .then(data => dispatch(handleRemove(id)))
    .catch(err => dispatch(err))
  };
}
