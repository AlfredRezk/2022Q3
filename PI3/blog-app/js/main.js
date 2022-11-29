
import UI from "./UI.js";
import Post from "./Post.js";

// Bootstrap tooltip;
const tooltipTriggerList = document.querySelectorAll(
	'[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
	(tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);


const ui = new UI();

document.getElementById('home').addEventListener('click', (e) => {
  e.preventDefault();
  ui.home()
})
document.getElementById('add').addEventListener('click', (e) => {
  e.preventDefault();
  ui.add()
})
