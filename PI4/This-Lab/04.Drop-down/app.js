function solve() {

  const btn = document.getElementById('dropdown');


  // add the event listener
  btn.addEventListener('click', function (e) { 
    const ul = this.nextElementSibling;
    switch (ul.style.display) { 
      case "":
      case 'none': ul.style.display = 'block'; break;
      case 'block': ul.style.display = 'none'; break;
    }
  })


  document.querySelector('ul')
    .addEventListener('click', function (e) { 
    const box = this.parentElement.nextElementSibling;
    box.style.backgroundColor = e.target.textContent;
  })

}