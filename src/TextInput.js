import React from 'react'
import { FiCamera } from 'react-icons/fi'
import { IoMdSend } from "react-icons/io";
class TextInput extends React.Component {

    /* State is: a java script object */
    state = {
        /* text: " Write your message here...."  */
        text: ""
    }

    send = () => {

        this.props.sendMessage(this.state.text)
        this.setState({ text: "" })
    }

    keyPress = (e) => {
        if (e.key == 'Enter') {
            this.send()
        }
    }

    render() {
        return (<div className="text-input">
            
            <button onClick={this.props.showCamera}
                style={{ left: 10, right: 'auto' }}>
                <FiCamera style={{ height: 15, width: 15 }} />
            </button>

            <input value={this.state.text}
                onKeyPress={this.keyPress}
                /* e=> refers to the event of clicking*/
                placeholder="Write your message here..."
                onChange={e => this.setState({ text: e.target.value })}
            />
            <button disabled={!this.state.text} onClick={this.send}
            >
                <IoMdSend style={{ hieght: 25, width: 25 }} />
            </button>
        </div>)

    }
}
export default TextInput 