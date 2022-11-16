function growingWord() {

  const word = document.querySelector('#exercise p');

  // get the current fontSize and color of the word 
  const font = word.style.fontSize;
  const color = word.style.color;

  // if the word doesn't have a color or font (initial state)
  if (!font && !color) { 
    word.style.fontSize = '2px';
    word.style.color = 'blue';
    return;
  }

  // if the button clicked more than once 
  let size = font.slice(0, font.length - 2);
  size *= 2;
  word.style.fontSize = size + 'px';

  switch (color) { 
    case 'blue': word.style.color = 'green'; break; 
    case 'green':word.style.color = 'red'; break;
    case 'red': word.style.color = 'blue'; break;
  }

}