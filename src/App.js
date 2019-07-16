import React from 'react';
import './App.css';
import logo from './logo.png'
import TextInput from './TextInput'
import NamePicker from './NamePicker'
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import Camera from 'react-snap-pic'
import Div100vh from 'react-div-100vh'



class App extends React.Component {

  state = {
    messages: [],
    name: '',
    editName: false,
    showCamera: false
  }



  componentWillMount() {
    var name = localStorage.getItem('name')
    if (name) {
      this.setState({ name })
    }

    /* <=========================> */

    firebase.initializeApp({
      apiKey: "AIzaSyDvOBznpA-mIpEqF_a0F93xhhevQy_S8MI",
      authDomain: "chatbot-d7c93.firebaseapp.com",
      projectId: "chatbot-d7c93",
      storageBucket: "chatbot-d7c93.appspot.com",
    });



    this.db = firebase.firestore();
    this.db.collection("messages").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          //console.log(change.doc.data())
          this.receive(change.doc.data())
        }
      })
    })

    /* <=========================> */
  }

  /* <===========================> */

  receive = (m) => {
    const messages = [m, ...this.state.messages]
    messages.sort((a, b) => b.ts - a.ts)
    this.setState({ messages })
  }



  send = (m) => {
    this.db.collection("messages").add({
      ...m,
      from: this.state.name || 'No name',
      ts: Date.now()
    })
  }

  /* <===========================> */

  /*

  gotMessage = (m) => {

    const message = {

      text: m,

      from: this.state.name

    }



    var newMessageArray = [message, ...this.state.messages]

    this.setState({ messages: newMessageArray })



  }

*/

  setEditName = (editName) => {
    if (!editName) {
      localStorage.setItem('name', this.state.name)
    }
    this.setState({ editName })
  }

  takePicture = (img) => {
    console.log(img)
    this.setState({ showCamera: false })
  }

  takePicture = async (img) => {
    this.setState({showCamera:false})
    const imgID = Math.random().toString(36).substring(7);
    var storageRef = firebase.storage().ref();
    var ref = storageRef.child(imgID+'.jpg');
    await ref.putString(img, 'data_url')
    this.send({img: imgID})
  }

  render() {
    /* destructoring */
    var { messages, name, editName } = this.state
    console.log(messages)
    return (
      <Div100vh className="App">
        < header className="header">chatbot
        <img src={logo} className="logo" alt="logo of chatbot" />
          <NamePicker
            changeName={name => this.setState({ name })}
            name={name}
            /*  setEditName={editName => this.setState({editName})} */
            setEditName={this.setEditName}
            editName={editName} />
        </header>



        <main className="messages">
          {messages.map((m, i) => {
            return (<div key={i} className="bubble-wrap"
              from={m.from === name ? "me" : "you"} >
              {m.from !== name && <span>{m.from}</span>}
              <div className="bubble">
              <span>{m.text}</span>
              {m.img && <img alt="pic" src={bucket+m.img+suffix} />}
              </div>
            </div>)
          })}
       </main>

        <TextInput sendMessage={text => this.send({ text })}
          showCamera={() => this.setState({ showCamera: true })}
        />
        {this.state.showCamera && <Camera takePicture={this.takePicture} />}
        </Div100vh>
    );
  } // end of render() 
} //end of app component 

export default App;

const bucket = 'https://firebasestorage.googleapis.com/v0/b/chatbot-d7c93.appspot.com/o/'
const suffix = '.jpg?alt=media'