import { createChatBotMessage } from 'react-chatbot-kit';

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
  state: {
    myCustomProperty: 'Bikershorts',
  },
};

export default config;