
import UI from "./UI.js";
import Post from "./Post.js";

const ui = new UI();

// Bootstrap tooltip;
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


document.addEventListener('DOMContentLoaded', () => { ui.home() })

  document.addEventListener("click", postActions);

document.getElementById('home').addEventListener('click', (e) => {
  e.preventDefault();
  ui.home();
})


document.getElementById('add').addEventListener('click', (e) => {
  e.preventDefault();
  ui.add();
  const addForm = document.getElementById('add-form');
  addForm.addEventListener('submit', addPost);
})


function addPost(e) { 
  e.preventDefault();
    const title = document.getElementById("title");
  const image = document.getElementById("image-url");
  const body = document.querySelector("iframe").contentDocument.body.innerHTML;
  const newPost = new Post(title.value, image.value, body);
  newPost.add();
  ui.home();

}


function postActions(e) { 

  if (e.target.className.includes('delete-btn')) {
    const card = e.target.parentElement.parentElement.parentElement.parentElement;
    console.log(card);
    Post.removeById(card.id);   //remove data;
    card.remove();
  }
}