function solve() {

  const aTags = document.querySelectorAll('a');
  const pTags = document.querySelectorAll('p');

  // [1, 2, 4,4, 7, 6 ]
  const visitedArr = Array.from(pTags).map(p => p.innerText.split(' ')[1])


 
  Array.from(aTags).forEach((link, index) => { 
    link.addEventListener('click', () => { 
      // inc the number of visit and manipulate the nextSiblingElement (p)
      let para = link.nextElementSibling;
      para.innerText = `visited ${++visitedArr[index]} times`
    })
  })
}