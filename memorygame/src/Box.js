import React from 'react';
import './Box.css'
class Box extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = "box" style={{backgroundColor: this.props.color}}>

      </div>
    );
  }
}
export default Box;
