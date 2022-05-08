import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../src/components/DogPicture';
import MyAvatar from '../src/components/MyAvatar';


const config = {
  initialMessages: [createChatBotMessage(`Hi my name is Tessa!`), 
  createChatBotMessage("say 'hello' 🤭", {
    withAvatar: true,
    delay: 1000,
    widget: "overview",
  })],
  botName: "Tessa",
  customStyles: {
    botMessageBox: {
      backgroundColor: '#5586AE',
    },
    chatButton: {
      backgroundColor: '#42A5F5',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  customComponents: {
   // Replaces the default bot avatar
   botAvatar: (props) => <MyAvatar {...props} />,
 },
};

export default config;