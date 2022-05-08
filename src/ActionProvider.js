import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleHello() {
      const message = createChatBotMessage("Hello. Nice to meet you", {
        withAvatar: true,
        delay: 900,
      });
      const message2 = createChatBotMessage("Here's a nice dog picture for you!", {
        withAvatar: true,
        delay: 2000,
        widget: 'dogPicture',
      });
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message],
      }));

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message2],
      }));
    }
  }
  
  export default ActionProvider;