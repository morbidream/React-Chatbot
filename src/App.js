import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'

import config from '../src/config';
import MessageParser from '../src/MessageParser';
import ActionProvider from '../src/ActionProvider';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />

      </header>
    </div>
  );
}

export default App;
