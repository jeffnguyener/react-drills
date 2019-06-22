import React, { Component } from "react";
import "./App.css";
import DangerButton from './Components/DangerButton'


class App extends Component {
  handleClick = () => {
    import('./Components/moduleA')
      .then(({ moduleA }) => {
        console.log(moduleA)
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
        <DangerButton />
      </div>
    );
  }
}

export default App;
