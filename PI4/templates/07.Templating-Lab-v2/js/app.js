const partials = [
  new Partial('./views/header.hbs', 'appTitle', { title: 'My contacts' }), 
  new Partial('./views/footer.hbs', 'appFooter', {copy:' Copy Rights 2023'})
]

const mainTemp = new Template('./views/main.hbs', { contacts }, '#contacts', partials)
mainTemp.render();

function showDetails(id) { 
  document.getElementById(id).classList.toggle('show')
}
