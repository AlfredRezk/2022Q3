import { initializeApp } from "firebase/app";
import { getDatabase, ref, set , onValue, update, remove} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCB8dGtPkYqa0wuGQ_kwgent-y6vXzMas0",
  authDomain: "testappkingsland.firebaseapp.com",
  databaseURL: "https://testappkingsland-default-rtdb.firebaseio.com",
  projectId: "testappkingsland",
  storageBucket: "testappkingsland.appspot.com",
  messagingSenderId: "186988267027",
  appId: "1:186988267027:web:3b17de3814c25227e5e1e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function createBook(bookId, title, author) {
  const url = ref(db, `books/${bookId}`)
  set(url, { title, author })
}

export async function readBooks() { 
  const url = ref(db, 'books/');
  onValue(url, (data) => { 
  console.log(data.val());
  })
}

export function updateBook(bookId, title, author) {
  const updates = {}
  updates[`books/${bookId}`] =  { title, author }
  return update(ref(db), updates);
}

export function deleteBook(bookId) { 
  remove(ref(db, `books/${bookId}`))
}