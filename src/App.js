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
      <div className = "txtarea"> 
        <article >  

        <div className="speech-bubble arrow">
        <div className="arrow"></div>
        <div className="after"></div>
            Hi!
        </div>
          
        <div className="speech-bubble ">
        <div className="arrow"></div>
        <div className="after"></div>
            How are you? 
        </div>
        <div className="speech-bubble ">
        <div className="arrow"></div>
        <div className="after"></div>
            what time are we meeting today? 
        </div>

        </article>
      </div>
    </div>
  );

}

export default App;
