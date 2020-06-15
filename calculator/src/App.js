import React from 'react';
import Calculator from './Calculator';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="bg-dark text-center p-4 align-middle">
        <Calculator/>
      </div>
    );

  }

}

export default App;
