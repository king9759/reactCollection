// How will I make calculator
//  First define all the functions that will take inputs and give outputs
// define a input component with all the available inputs as buttons. and add button handlers with an input element in state
//
import React from 'react';
import CalculatorUI from './CalculatorUI';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }
  // Here we define functions
  add(){

  }

  render(){

    return(
      <div>
        <CalculatorUI/>
      </div>
    );
  }
}
export default Calculator;
