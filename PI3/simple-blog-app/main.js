let  posts = [
  {id: '1', title: 'First Post', content: 'Text ....', image: 'https://picsum.photos/id/237/200/300'}, 
  {id:'2', title: 'Second Post', content: 'Text ....', image: 'https://picsum.photos/id/238/200/300'}, 
  {id:'3', title: 'Third Post', content: 'Text ....', image: 'https://picsum.photos/id/239/200/300'}, 
]


document.addEventListener('DOMContentLoaded', render)

document.body.addEventListener('click', clickHandler);


function clickHandler(e) { 

  const isButton = e.target.nodeName ==='BUTTON';

  if (isButton && e.target.id === "add-btn") {
    toggleForm()
  } else if (isButton && e.target.className.includes("btn-danger")) {

    deletePost(e.target)
  } else if (isButton && e.target.className.includes("btn-warning")) {
    // editPost();
  } else if (isButton && e.target.id === 'add') { 
    addPost()
  }
}



function addPost() { 
  const title = document.getElementById('title')
  const content = document.getElementById('content')
  const image = document.getElementById('image')

  const post = { title:title.value, image:image.value, content:content.value, id: Date.now() }
  posts.push(post);
  render();
  title.value = '';
  content.value = '';
  image.value = '';
}

function deletePost(el) { 
  posts = posts.filter(post => post.id !== el.id);
  render();
}

function toggleForm() { 
  const form = document.querySelector('form')
  form.classList.toggle('form-hide');
}

function render() { 

  const section = document.querySelector('#posts');

  section.innerHTML = '';
  const div = document.createElement('div');
  div.classList.add('row')
  div.innerHTML = posts
		.map(
			(post) => `
  <div class="card col-4 m-3" style="width: 18rem;" >
  <img src=${post.image} class="card-img-top img-fluid" alt=${post.title}>
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">${post.content}</p>
    <div class="d-flex justify-content-between">
      <button class="btn btn-danger" id=${post.id}><i class="bi bi-trash-fill"></i> </button>
      <button class="btn btn-warning"><i class="bi bi-pencil-fill"></i></button>
    </div>  
  </div>
</div>
  `
		)
		.join("");


section.appendChild(div);

}

