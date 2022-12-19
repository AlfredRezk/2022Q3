// function loadRepos() {

//   // 1. create a new instant of xmlHttpRequest
//   const xhr = new XMLHttpRequest();
//   const url = 'https://api.github.com/users/testnakov/repos';

//   xhr.onload = function () {
//     // check the status code is 200 = ok
//     if (this.status === 200) {
//       document.querySelector("#res").innerHTML = "";
//       document.querySelector('#res').textContent = this.responseText;
//     }
//   }

//   xhr.onprogress = function () {
//     document.querySelector('#res').innerHTML = `<img src="./loading.gif">`;
//   }

//   xhr.open('GET', url)
//   xhr.send();

// }


function loadRepos() {
	// 1. create a new instant of xmlHttpRequest
	const xhr = new XMLHttpRequest();
	const url = "https://api.github.com/users/testnakov/repos";
	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4 && this.status === 200) {
			document.querySelector("#res").innerHTML = "";
			document.querySelector("#res").textContent = this.responseText;
		} else if (this.readyState === 3) {
			document.querySelector("#res").innerHTML = `<img src="./loading.gif">`;
		}
	});

	  xhr.open('GET', url)
	  xhr.send();
}