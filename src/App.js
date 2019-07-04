import React from 'react';
import './App.css';
import logo from './logo.png'
import TextInput from './TextInput'
import NamePicker from './NamePicker'

class App extends React.Component {
  state = {
    messages: [],
    name: '',
    editName: false,

  }

  gotMessage = (text) => {
    var newMessageArray = [...this.state.messages, text]
    this.setState({ messages: newMessageArray })
  }

  setEditName = (text) => {
    var name = this.state.editName, text
    this.setState({editName: name})

  }

  render() {
    /* destructoring */
    var { messages } = this.state
    console.log(messages)
    return (
      <div className="App">
        < header className="header">chatbot
        <img src={logo} className="logo" alt="logo of chatbot" />
          <NamePicker editName = {this.name} />
        </header>

        <main className="messages">
          {messages.map((m, i) => {
            return (<div key={i} className="bubble-wrap">
              <div className="bubble">
                <span>{m}</span>
              </div>
            </div>)
          })}
        </main>


        <TextInput sendMessage={this.gotMessage} />
      </div>
    );

  }
}
export default App;
