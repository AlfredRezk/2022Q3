const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set, onValue } = require("firebase/database");
const { v4: uuid } = require('uuid');


const firebaseConfig = {
	apiKey: "AIzaSyCB8dGtPkYqa0wuGQ_kwgent-y6vXzMas0",
	authDomain: "testappkingsland.firebaseapp.com",
	databaseURL: "https://testappkingsland-default-rtdb.firebaseio.com",
	projectId: "testappkingsland",
	storageBucket: "testappkingsland.appspot.com",
	messagingSenderId: "186988267027",
	appId: "1:186988267027:web:3b17de3814c25227e5e1e6",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const addProduct = (title, description, price, imageUrl) => { 
  
  const id = uuid();
  set(ref(db, 'products/' + id), {
    title, description, price, imageUrl, id
  })
}


const getProducts = () => { 
  return new Promise((resolve, reject) => { 
    onValue(ref(db, 'products/'), (snapshot) => { 
      resolve(snapshot.val())
    })
  })
}

module.exports = {addProduct, getProducts}