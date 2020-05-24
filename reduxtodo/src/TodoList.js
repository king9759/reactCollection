import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { ADD_TODO, REMOVE_TODO, addTodo, removeTodo, getTodos } from './actionCreator';
import {Route} from 'react-router-dom';
import NewForm from './newForm';
const Todo = ({task, handleDelete}) => (
    <div>
      <li>{task}</li>
      <button onClick={() => handleDelete(task)}>X</button>
    </div>
);
// The main application that will be rendered inside index.js
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo:''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(task, e){
    this.props.dispatch({
      type: REMOVE_TODO,
      task:task
    })
  }
  handleAdd(val){
    this.props.dispatch({
      type: ADD_TODO,
      task: val
    });
  }
  render(){
    const todos = this.props.todos.map((val,index)=>(<Todo key={index} task={val} handleDelete={this.handleDelete}></Todo>));
    return(
      <div>
        <Route path='/todos/new' component ={(props)=> <NewForm {...props} handleSubmit= {this.handleAdd}/>}/>
        <Route exact path='/todos' component={()=><div>{todos}</div>}/>
      </div>
    );
  }

}
function mapStateToProps(reduxState){
  return {
    todos: reduxState.todos
  }
}
export default connect(mapStateToProps,{addTodo, removeTodo, getTodos})(App);
