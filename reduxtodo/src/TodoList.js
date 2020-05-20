import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { ADD_TODO, REMOVE_TODO } from './actionCreator';
import {Route} from 'react-router-dom';
const Todo = ({task, handleDelete}) => (
    <div>
      <li>{task}</li>
      <button onClick={() => handleDelete(task)}>X</button>
    </div>
);
const NewTodo = ({handleSubmit, handleChange}) => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="todo" onChange={handleChange} placeholder="Enter a Todo to add to the List"/>
    <button>Submit</button>
  </form>
);
// The main application that will be rendered inside index.js
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todo:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(task, e){
    this.props.dispatch({
      type: REMOVE_TODO,
      task:task
    })
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch({
      type: ADD_TODO,
      task: this.state.todo
    });
    this.setState({todo:''});
  }
  render(){
    const todos = this.props.todos.map((val,index)=>(<Todo key={index} task={val} handleDelete={this.handleDelete}></Todo>));
    return(
      <div>
        <Route path='/todos/new' component ={()=><div>{<NewTodo handleSubmit={this.handleSubmit} handleChange={this.handleChange} ></NewTodo>}</div>}/>
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
export default connect(mapStateToProps)(App);
