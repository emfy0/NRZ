export default class Coder {
  constructor(message) {
    this.message = message;
    this.codedMessageVal = null;
  }

  get codedMessage() {
    return this.codedMessageVal ||= this.encodeMessage();
  }

  rawCodedMessageAry(min, max) {
    return this.rawCodedMessageVal ||= this.codedMessage.replaceAll(' ', '').split('').map(x => x == 0 ? min : max);
  }

  encodeMessage() {
    const message = this.message.split('');

    return message.map(
      x => x.charCodeAt(0).toString(2)
    ).join(' ');
  }
}