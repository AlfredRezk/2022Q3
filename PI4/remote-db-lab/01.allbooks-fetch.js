async function getAllBooks() { 
  const url = "https://testappkingsland-default-rtdb.firebaseio.com/.json";
  const res = await fetch(url);
  const data = await res.json();
  console.log(JSON.stringify(data));
}

getAllBooks();