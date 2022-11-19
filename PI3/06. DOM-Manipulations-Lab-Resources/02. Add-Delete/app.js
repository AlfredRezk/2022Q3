function addItem() {

  // Get the DOM variables 
  const list = document.getElementById("items");
  const input = document.querySelector("#newText");
  
  // validation 
  if (!input.value) return;

  // Create a new Li Element 
  const li = document.createElement('li')
  li.innerHTML = `${input.value} <a class="delete" href="#">[DELETE]</a>`;

  list.appendChild(li);
  // clear my field
  input.value = '';
}

document.addEventListener('click', deleteItem);

function deleteItem(e) { 
  const link = e.target;
  if (link.nodeName === 'A') { 
    // Delete the parent
    const li = link.parentElement;
    // remove it 
    li.remove();
  }
}
