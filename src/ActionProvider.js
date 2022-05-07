import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleHello() {
      const message = createChatBotMessage("Hello. Nice to meet you. Here's a nice dog picture for you!", {
        withAvatar: true,
        delay: 800,
        widget: 'dogPicture',
      });
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));
    }
  }
  
  export default ActionProvider;