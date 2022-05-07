import { createChatBotMessage } from 'react-chatbot-kit';
import DogPicture from '../src/components/DogPicture'


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
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;