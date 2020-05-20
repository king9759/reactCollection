import React from 'react';
import './App.css';
import TodoList from './TodoList'
import {Link, Route, Redirect} from 'react-router-dom'
// The main application that will be rendered inside index.js
//This will render component TodoList when on /todos
//This will render a fuction that will redirect to /todos
//This creates a link to /todos route. It works like a tag
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>Welcome to Our TODO App</h1>
        <p>
          <Link to="/todos">Show Todo List</Link>
        </p>
        <p>
          <Link to="/todos/new">Create New Todo</Link>
        </p>
        <Route path="/todos" component={TodoList}/>
        <Route exact path="/" render={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}
export default App;
