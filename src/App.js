import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import React, { useState } from 'react';
import config from '../src/config';
import ActionProvider from '../src/ActionProvider';
import avatar from '../src/assets/favicon.ico';
import MessageParser from "./MessageParser";


function App() {

  const [showBot, toggleBot] = useState(false);

  const saveMessages = (messages, HTMLString) => {
    localStorage.setItem('chat_messages', JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem('chat_messages'));
    return messages;
  };

  return (
    <div className="App">
      <header className="App-header">
        
      {showBot && (
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      )}
      <button className="App-button" onClick={() => toggleBot((prev) => !prev)}>
      <img className="App-img" src={avatar} alt='avatar' />
      </button>

      </header>
    </div>
  );
}

export default App;
