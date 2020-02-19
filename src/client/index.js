import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    count: 5,
  };
   decrement = () => {
     const currentValue = this.state.count;

     this.setState({
       count: currentValue - 1,
     });
   }
  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.decrement}>-</button>
      </div>;
  }
}

render(<App />, document.getElementById('root'));