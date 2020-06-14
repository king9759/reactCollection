// This will be the function which will switch different mathematical operations with the symbol
import {add, subtract, multiply, divide, mod} from './functions.js';
export function switcher(symbol, num1, num2){
  switch (symbol){
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
    case '%':
      return mod(num1, num2);
    default:
      return symbol;
  }
};
