// How will I make calculator
//  First define all the functions that will take inputs and give outputs
// define a input component with all the available inputs as buttons. and add button handlers with an input element in state
//
import React from 'react';
import CalculatorUI from './CalculatorUI';
import {switcher} from './switcher.js';
class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      symbol: '',
      clickedSymbol: false,
      display: 0,
    };
    this.handleClickNum = this.handleClickNum.bind(this);
    this.handleClickSymb = this.handleClickSymb.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  handleClickNum(num){
    if(this.state.clickedSymbol){
      let number = this.state.num2.toString();
      number += num;
      this.setState({num2: Number(number)}, () => {
        this.handleDisplay();
      });
    }
    else{
      let number = this.state.num1.toString();
      number += num;
      this.setState({num1: Number(number)}, () => {
        this.handleDisplay();
      });
    }

  }
  handleClickSymb(symbol){
    var result = switcher(this.state.symbol, this.state.num1, this.state.num2);
    if(result > 0){
      this.setState({num1: result, num2: 0}, () => {
        this.handleDisplay();
      });
    }
    if(symbol === "C"){
      this.setState({num1: 0, num2: 0, clickedSymbol: false}, () => {
        this.handleDisplay();
      });
    }else{
      this.setState({symbol: symbol,clickedSymbol: true}, () => {
        this.handleDisplay();
      });
    }

  }
  handleDisplay(){
    if(this.state.num2 !== 0){
      this.setState({display: this.state.num2});
    }else{
      this.setState({display: this.state.num1});
    }
  }
  render(){

    return(
      <div>
        <h1>{this.state.display}</h1>
        <CalculatorUI handleDisplay={this.handleDisplay} handleClickNum={this.handleClickNum} handleClickSymb={this.handleClickSymb}/>
      </div>
    );
  }
}
export default Calculator;
