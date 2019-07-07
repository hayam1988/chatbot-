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

  gotMessage = (m) => {
    const message = {
      text: m, 
      from: this.state.name
    }
    
    var newMessageArray = [message, ...this.state.messages]
    this.setState({ messages: newMessageArray })

  }

  render() {
    /* destructoring */
    var { messages } = this.state
    console.log(messages)
    return (
      <div className="App">
        < header className="header">chatbot
        <img src={logo} className="logo" alt="logo of chatbot" />
          <NamePicker  changeName={name=>this.setState({name})}  name={this.state.name}
          setEditName={editName => this.setState({editName})} editName = {this.state.editName}/>

        </header>

        <main className="messages">
          {messages.map((m, i) => {
            return (<div key={i} className="bubble-wrap">
             
             <span>{m.from}</span>
              <div className="bubble">
                <span>{m.text}</span>
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
