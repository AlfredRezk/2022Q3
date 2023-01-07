
// get <script> template by id;
const src = document.getElementById('cards').innerHTML;
// use handlebars to compile the template => HTML
const template = Handlebars.compile(src);
// Register partials 
const partialSrc = document.getElementById('header').innerHTML;
Handlebars.registerPartial('appHeader', partialSrc)

const htmlCode = template({contacts, title: 'My contacts'})
// append template data to the DOM

document.getElementById('contacts').innerHTML = htmlCode;

function showDetails(id) {
  document.getElementById(id).classList.toggle('show');
}