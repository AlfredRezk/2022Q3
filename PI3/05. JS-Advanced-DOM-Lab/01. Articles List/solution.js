function createArticle() {

  const title = document.querySelector("#createTitle");
  const content = document.querySelector("#createContent");
  const section = document.querySelector('#articles')

  if (!title.value || !content.value)
    return;
  
  const article = document.createElement('article');
  article.innerHTML = `
  <h3> ${title.value} </h3>
  <p> ${content.value}</p>
  `

  section.appendChild(article);
  // clear my inputs 
  title.value = "";
  content.value = ""
}