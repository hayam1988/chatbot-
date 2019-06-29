import React from 'react'
import send from './send2.png'
class TextInput extends React.Component {

    /*is a function*/
    render() {
        return(<div className = "text-input">
             <input type = "text" id = "txt1" />
             <button onclick= "myFunction()">
             <img src = {send} className = "send" alt = "send message icon button "/>
             </button>
         </div>)
  
    }
} 



export default TextInput 