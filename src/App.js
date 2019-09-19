import React, { Component } from 'react';
import Counter from './components/counter/Counter'

class App extends Component {

  render() {
    return (
      <div>
        <h1 className='colored'>Counter Example</h1>
        <Counter name='red' />
        <Counter name='green' />
        <Counter name='purple' />
        <Counter name='blue' />
      </div>
    )
  }
}

// React.createElement(h1, counter)React.createElement(h1, counter)
// React.createElement(div, counter)

export default App;