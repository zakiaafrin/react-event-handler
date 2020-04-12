import React, { Component } from 'react';
import './App.css';   // style

class App extends Component {
  state = {
    name: ''
  }
  clickHandler = (event) => {
    alert('Hi, I have clicked');
  }
  inputHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {
    return (
      <div className='App'>
        <div className='container my-3'>
          <input onChange={this.inputHandler} type='text' placeholder='Your Name : ' />
          <button className='btn btn-primary' onClick={this.clickHandler}>
            Click Me
         </button>
          {this.state.name ? <p> Hello, Mr. {this.state.name} </p> : ''}
        </div>
      </div>
    );
  }
}
export default App;