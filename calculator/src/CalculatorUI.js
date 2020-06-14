import React from 'react';

class CalculatorUI extends React.Component {
  static defaultProps = {

  };
  constructor(props){
    super(props);
    this.state = {
      numbers: ['0','1','2','3','4','5','6','7','8','9'],
      symbols: ['+','-','*','/','%','=','C']
    };
  }
  // This file will return the calculator ui which should be like Mac Calculator
  // The h1 shall update with the value of button that clicked only if it is a number.
  // The state of main component shall contan only two numbers and one symbol for calculation
    render() {
      var numInputs = this.state.numbers.map((num,index) => <p key={index} onClick={() => this.props.handleClickNum(num)}>{num}</p>);
      var symbolInputs = this.state.symbols.map((symbol,index) => <p key={index} onClick={() => this.props.handleClickSymb(symbol)}>{symbol}</p>);
    return(
      <div>
        {numInputs}
        {symbolInputs}
      </div>
    );
  }
}
export default CalculatorUI;
