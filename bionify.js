const sel = window.getSelection(); // Gets selection
if (sel.rangeCount) {
  // Creates a new element, and insert the selected text with the chosen font inside
  const e = document.createElement("span");
  //   e.style = "color: red";
  e.innerHTML = bionifyText(sel.toString());

  // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
  const range = sel.getRangeAt(0);
  range.deleteContents(); // Deletes selected text…
  range.insertNode(e); // … and inserts the new element at its place
}

function bionifyText(text) {
  const words = text.split(/\s+/);
  return words.map(bionifyWord).join(" ");
}

function bionifyWord(word) {
  const wordLength = word.length;
  const numBionifiedCharacters = Math.floor((wordLength * 60) / 100);
  const bionifiedToken = word.slice(0, numBionifiedCharacters);
  const theRest = word.slice(numBionifiedCharacters);
  return `<b>${bionifiedToken}</b>${theRest}`;
}
