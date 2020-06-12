import React from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';

// all the inputs in FlagAnswer are props destructured elements ${} with backtick allows to insert JS values inside string
const FlagAnswer = ({correct, answer, onNext}) => (
  <div className='flag-answer'>
    {correct ?
      `Correct!: ${answer}` :
      `Incorrect! Correct Answer: ${answer}`}
    <StyledButton text="NEXT" onClick={onNext} />
  </div>
);

export default FlagAnswer;
