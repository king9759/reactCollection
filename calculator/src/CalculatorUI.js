import React from 'react';
import './CalculatorUI.css';

class CalculatorUI extends React.Component {
  static defaultProps = {

  };
  constructor(props){
    super(props);
    this.state = {
      numbers: ['0','1','2','3','4','5','6','7','8','9'],
      symbols: ['+','-','*','.','/','%','=','C','D']
    };
  }
  // This file will return the calculator ui which should be like Mac Calculator
  // The h1 shall update with the value of button that clicked only if it is a number.
  // The state of main component shall contan only two numbers and one symbol for calculation
    render() {
      var numInputs = this.state.numbers.map((num,index) => {
        if(index === 3 || index === 7){
          return <p className="number btn col-3" key={index} onClick={() => this.props.handleClickNum(num)}>{num}</p>
        }else{
          return <p className="btn col-3" key={index} onClick={() => this.props.handleClickNum(num)}>{num}</p>
        }
      });
      var symbolInputs = this.state.symbols.map((symbol,index) => {
        if(symbol === '-' || symbol === '%' || symbol === 'D'){
          return <p className="symbol btn col-3" key={index} onClick={() => this.props.handleClickSymb(symbol)}>{symbol}</p>
        }else if(symbol === '='){
          return <p className=" btn col-6" key={index} onClick={() => this.props.handleClickSymb(symbol)}>{symbol}</p>
        }
        else{
          return <p className=" btn col-3" key={index} onClick={() => this.props.handleClickSymb(symbol)}>{symbol}</p>
        }

      });
    return(
      <div className="row">
        {numInputs}
        {symbolInputs}
      </div>
    );
  }
}
export default CalculatorUI;
