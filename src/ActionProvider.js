import { createChatBotMessage } from 'react-chatbot-kit';

class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
      this.createChatbotMessage = createChatbotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }
  
    handleDog() {
      const message2 = createChatBotMessage("Here's a nice dog picture for you!", {
        withAvatar: true,
        delay: 2000,
        widget: 'dogPicture',
      });

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message2],
      }));
    }

    handleMeme() {
        const message3 = createChatBotMessage("Here's a meme!", {
        withAvatar: true,
        delay: 1000,
        widget: 'Memes',
      });
  

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message3],
      }));
    }
    handleSorry() {
      const message4 = createChatBotMessage("Sorry I didn't get that 😔", {
        withAvatar: true,
        delay: 900,
      });
      const message5 = createChatBotMessage('Please try "dog" or "meme"', {
        withAvatar: true,
        delay: 2000,
      });
  
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message4],
      }));

      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, message5],
      }));
    }
  }
  
  export default ActionProvider;