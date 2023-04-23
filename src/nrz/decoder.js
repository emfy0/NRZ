export default class Decoder {
  constructor(message) {
    this.codedMessage = message;
    this.messageVal = null;
  }

  get message() {
    return this.messageVal ||= this.decodeMessage();
  }

  decodeMessage() {
    const codedMessageAry = this.codedMessage.split(' ');

    return codedMessageAry.map(
      x => String.fromCharCode(parseInt(x, 2))
    ).join('');
  }
}