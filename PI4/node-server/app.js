const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const { addProduct , getProducts} = require('./firebase');


app.engine('hbs', engine({
  extname: '.hbs', 
  defaultLayout: 'main-layout',
  layoutsDir: 'views/layouts',
  partialsDir:'views/partials'
}))

app.use(express.urlencoded({extended:false}))


app.set('view engine', 'hbs');
app.set('views','./views')

app.get('/add', (req, res) => { 
  res.render('add', {docTitle:'Add Product'})
})

app.post('/add', (req, res) => { 
  const {title, price, imageUrl, description } = req.body
  addProduct(title, description, price, imageUrl)
  res.redirect('/');
})

app.get('/', async(req, res) => { 
  let products = await getProducts();
  if (products) { 
    products = Object.values(products);

  }
  res.render('home', {products, docTitle:'Home'});
})


app.listen(8080);