function addItem() {

  // get hold on DOM Elements 
  const list = document.getElementById('items');
  const input = document.querySelector('#newItemText')
  
  // validation
  if (!input.value) return;

  // create a new LI element
  const li = document.createElement('li');
  li.textContent = input.value;

  // Append the new Li element to the ul element
  list.appendChild(li);

  // clear the input field
  input.value = '';
}
