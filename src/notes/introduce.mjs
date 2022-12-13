function introduce(text) {
  let node = document.createElement('section');
  node.innerHTML = text;
  document.body.appendChild(node);
}

export {introduce};