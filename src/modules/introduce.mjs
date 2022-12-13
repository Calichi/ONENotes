function newLine() {
  document.body.appendChild(document.createElement('br'));
}

function introduce(text) {
  let node = document.createElement('section');
  node.innerHTML = text;
  document.body.appendChild(node);
}

export {introduce, newLine};