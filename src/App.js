import React from 'react';
import './App.css';
import logo from './logo.png'
import TextInput from './TextInput'

function App() {
  return (
    <div className="App">
      < header className = "header">chatbot
      <img src = {logo} className = "logo" alt = "logo of chatbot"/>
      </header>
      <TextInput/>
    </div>
  );
}

export default App;
