function solve() {

  const word = document.getElementById('word').value;
  const arr =  JSON.parse(document.getElementById('text').value)
  document.getElementById('result').innerHTML = replaceWords(word, arr);
}


function replaceWords(word, arr) {
  const wordToReplace = arr[0].split(" ")[2]; // I love pROgRaMminG  => 'pROgRaMminG'
  const regex = new RegExp(wordToReplace, 'gi');
  arr = arr.map(item => `<p>${item.replace(regex, word)} </p>`).join('')
  return arr;
}
