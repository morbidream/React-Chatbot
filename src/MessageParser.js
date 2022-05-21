class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log("You: ",message);
      if (message.includes('dog')) {
        this.actionProvider.handleDog();
      }
      else if (message.includes('meme')) {
        this.actionProvider.handleMeme();
      }
      else {
        this.actionProvider.handleSorry();
      }
    }
  }
  export default MessageParser;