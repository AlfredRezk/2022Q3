let id;
	let minutes = 0;
	let seconds = 0;
const time = document.getElementById("time");
console.log(time)

function stopwatch() {
	// Add event listener to the document body to listen for click events
  document.addEventListener("click", (e) => { 
    if (e.target.id === "startBtn") startTimer(e.target);
		else if (e.target.id === "stopBtn") stopTimer(e.target);
  });
}


function startTimer(el) {
	id = setInterval(timer, 1000);
	// set the start button disabled
	el.setAttribute("disabled", "true");
	// remove the stop button disabled attribute
	el.nextElementSibling.removeAttribute("disabled");
}

function stopTimer(el) {
	//  stop the timer
	clearInterval(id);
	seconds = 0;
	el.setAttribute("disabled", "true");
	// remove the start button disabled attribute
	el.previousElementSibling.removeAttribute("disabled");
}


function timer() { 
  if (seconds >= 59) {
    minutes++;
    seconds = 0;
  } else { 
    seconds++;
  }

  minutes = Number(minutes);
  seconds = Number(seconds);

  if (seconds < 10) seconds = '0' + seconds;
  if (minutes < 10) minutes = '0' + minutes;
  time.textContent = `${minutes}:${seconds}`;
}