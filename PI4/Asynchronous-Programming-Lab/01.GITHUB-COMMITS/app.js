async function loadCommits() {
  const username = document.getElementById('username').value;
  const repoName = document.getElementById('repo').value;
  const url = `https://api.github.com/repos/${username}/${repoName}/commits`;
  const ul = document.getElementById("commits");
  try {
    const res = await fetch(url);
    if (!res.ok) throw (res);
    const resJson = await res.json();
    resJson.forEach(({ commit }) => loadToDom(ul, `${commit.author.name} : ${commit.message}`))
  } catch (err) { 
    console.log(err);
    loadToDom(ul, `Error: ${err.status} (${err.statusText})`);
  }
}

function loadToDom(el, text) { 
  const li = document.createElement("li");
  li.textContent = text;
	el.appendChild(li);
}