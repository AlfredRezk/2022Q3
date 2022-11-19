function attachGradientEvents() {
 
  // DOM Variables 
  const box = document.getElementById('gradient');
  const result = document.getElementById('result');

  box.addEventListener('mousemove', (e) => { 
    const width = e.target.offsetWidth;
    const x = e.offsetX
    result.textContent = Math.ceil((x/width)*100)+'%'
  })

}