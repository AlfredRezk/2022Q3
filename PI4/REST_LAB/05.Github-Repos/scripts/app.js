function loadRepos() {
  const username = document.getElementById('username').value;
  const repos = document.getElementById('repos');
  repos.innerHTML = "";

  const url = `https://api.github.com/users/${username}/repos`;
  // send a request 
  fetch(url)
    .then(res => { 
      if(res.ok) return res.json()
    })
    .then((data) => { 
      console.log(data);
      data.forEach(repo => { 
        repos.innerHTML += `<li><a href="${repo.html_url}" target="_blank">${repo.full_name} </a></li>`
      })
    })
    .catch((err) => {
      console.log(err);
      repos.innerHTML +=`<li>${err}</li>`
     })

}