function validate() {
  const input = document.getElementById('email');
  const regex = /[a-z]+@[a-z]+\.[a-z]{3}/g

  input.addEventListener("change", (e) => { 
    if (!regex.test(input.value))
      e.target.classList.add('error')
    else
      e.target.classList.remove("error");
  })
}
