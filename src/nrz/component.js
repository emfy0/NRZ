import Coder from './coder';
import Decoder from './decoder';

import Plotly from 'plotly.js-dist-min'

export default class Component {
  // <div class="row">
  //   <div class="card">
  //     <div id="rand"> plot </div>
  //     <h4> message </h4>
  //     <p> codedMessage </p>
  //   </div>
  // </div>

  constructor(message, min, max) {
    this.min = min;
    this.max = max;
    this.coder = new Coder(message);

    let row = this.#buildElem('div');
    row.className = 'row';

    let card = this.#buildElem('div');
    row.className = 'card';

    let messageElem = this.#buildElem('h4');
    messageElem.innerText = `Message: ${message}`;

    let codedMessageBin = this.#buildElem('p');
    codedMessageBin.innerText = `Binary: ${this.coder.codedMessage}`;

    let codedMessage = this.#buildElem('p');
    codedMessage.innerText = `Coded: ${this.coder.rawCodedMessageAry(min, max).join('')}`;

    let decodedMessage = this.#buildElem('h4');
    decodedMessage.innerText = `Decoded: ${new Decoder(this.coder.codedMessage).message}`;

    this.plotRandId = this.#getRandomId();

    let plotDiv = this.#buildElem('div');
    plotDiv.id = this.plotRandId;

    card.appendChild(plotDiv);
    card.appendChild(messageElem);
    card.appendChild(codedMessageBin);
    card.appendChild(codedMessage);
    card.appendChild(decodedMessage)

    row.appendChild(card);

    this.elem = row;
  }

  append_to(elem) {
    elem.appendChild(this.elem);

    Plotly.newPlot(this.plotRandId, [{
      y: this.coder.rawCodedMessageAry(this.min, this.max),
      mode: 'lines',
      line: {shape: 'hv'}
    }]);

    return elem;
  }

  #getRandomId() {
    return Math.random().toString(36).substr(2, 5);
  }

  #buildElem(klass) {
    return document.createElement(klass);
  }
}