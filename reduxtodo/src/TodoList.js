import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import { addTodo, removeTodo, getTodos } from './actionCreator';
import {Route} from 'react-router-dom';
import NewForm from './newForm';
const Todo = ({task, handleDelete}) => (
    <div>
      <li>{task}</li>
      <button onClick={handleDelete}>X</button>
    </div>
);

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  componentDidMount(){
    this.props.getTodos();
  }
  handleAdd(val){
    this.props.addTodo(val);
  }
  removeTodo(id){
    this.props.removeTodo(id);
  }
  render(){
    const todos = this.props.todos.map((val,index)=>(<Todo
       key={val._id}
       task={val.task}
       handleDelete={this.removeTodo.bind(this,val._id)}>
       </Todo>));
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
