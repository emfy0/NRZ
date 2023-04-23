import Component from './nrz/component';

function createNewNrz() {
  const message = document.getElementById('message').value;
  const min = +document.getElementById('min').value;
  const max = +document.getElementById('max').value;

  new Component(message, min, max).append_to(document.getElementsByName('container')[0]);
}

window.convert = createNewNrz;
