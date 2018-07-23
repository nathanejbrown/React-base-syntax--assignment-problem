import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'Stratocasta21'
  }

  switchUsername = (newUsername) => {
    this.setState({
      username: newUsername
    });
  }

  switchUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <UserOutput
          username={this.state.username}
          click={this.switchUsername.bind(this, 'Dyematrix')} />
        <UserInput
          change={this.switchUsernameHandler}
          username={this.state.username} />
      </div>
    );
  }
}

export default App;
