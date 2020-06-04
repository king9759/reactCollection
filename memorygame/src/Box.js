import React from 'react';
import './Box.css';
import PropTypes from 'prop-types';

// Stateless functional component
const Box = (props) =>{
  let style = {};
  if(props.showing){
    style.backgroundColor = props.backgroundColor;
  }
  return(
    <div
    onClick={props.onClick}
    className = "box"
    style={style}
    />
  );
};

Box.propTypes= {
  showing: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default Box;
