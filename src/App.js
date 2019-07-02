import React from 'react';
import './App.css';
import logo from './logo.png'
import TextInput from './TextInput'

class App extends React.Component {
  state = {
    messages: []

  }

  sendMessage = (m) => {
    var message = [...this.state.messages, m]
    this.setState({ message })
  }

  render() {
    console.log(this.state.message)
    return (
      <div className="App">
        < header className="header">chatbot
      <img src={logo} className="logo" alt="logo of chatbot" />
        </header>
        <TextInput sendMessage={this.sendMessage} />
      </div>
    );

  }
}
export default App;
