import React from 'react';
import PropTypes from 'prop-types';

// Stateless functional component
const Nav = (props)=>(
  <header>
    <h2>Memory Game</h2>
    <nav>
      <a href="" onClick={props.onNewGame}>New Game</a>
    </nav>
  </header>
);
Nav.propTypes = {
  onNewGame : PropTypes.func.isRequired
};
export default Nav;
