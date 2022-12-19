document.getElementById("btnLoadPosts").addEventListener('click', fetchOptions);
document.getElementById("btnViewPost").addEventListener('click', fetchPost);

async function fetchOptions() { 
  const res = await fetch("https://blog-apps-c12bf.firebaseio.com/posts/.json");
  if (!res.ok) return console.log(res);
  // Everything is ok 
  let json = await res.json();
  // convert teh object to an array 
  let resArr = Object.entries(json)
  // clear the select options because loading new ones 
  document.getElementById('posts').innerHTML = '';

  resArr.forEach(([postId, post]) => { 
    // create option element for the select element
    const option = document.createElement('option');
    option.value = postId;
    option.textContent = post.title;
    document.getElementById('posts').appendChild(option)
  })
}

async function fetchPost() { 
  const postId = document.getElementById("posts").value;
  const res = await fetch(`https://blog-apps-c12bf.firebaseio.com/posts/${postId}/.json`);
  if (!res.ok) return console.log(res);
  let post = await res.json();
  document.getElementById('post-title').textContent = post.title;
  document.getElementById("post-body").textContent = post.body;
  if (post.comments.length > 1) { 
    document.getElementById("post-comments").innerHTML = '';
    post.comments.forEach(comment => { 
      const li = document.createElement('li');
      li.textContent = comment.text;
      document.getElementById("post-comments").appendChild(li);
    })
  }
}

