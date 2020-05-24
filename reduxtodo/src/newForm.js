import React, {Component} from 'react';

class newForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      todo: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.handleSubmit(this.state.todo);
    this.setState({todo: ''});
    this.props.history.push('/todos'); //Take back to todos route
  }
  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todo" onChange={this.handleChange} placeholder="Enter a Todo to add to the List"/>
        <button>Submit</button>
      </form>
    );
  }
}
export default newForm;
