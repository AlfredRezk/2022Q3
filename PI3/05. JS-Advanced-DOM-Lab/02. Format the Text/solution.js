function solve() {

  const text = document.querySelector('#input');
  const output = document.querySelector('#output');

  // Array of sentences 
  const sentArr = text.innerText.split('.');
  sentArr.pop();

  // Get to know how many paragraphs we need 
  const pNum = Math.ceil(sentArr.length / 3);

  // loop to generate the paragraphs
  for (let i = 0; i < pNum; i++) { 
    // create a paragraph element 
    let p = document.createElement('p');
    let pArr = sentArr.splice(0, 3);
    // convert to string on '.'
    p.innerText = pArr.join('.') + '.';
    // Append the paragraph to the output div
    output.appendChild(p);
  }
}