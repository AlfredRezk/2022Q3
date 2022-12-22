async function updateBook(bookId, updates) {
	const url = `https://testappkingsland-default-rtdb.firebaseio.com/Books/${bookId}/.json`;
  const res = await fetch(url, {
    method: 'PATCH',
    body:JSON.stringify(updates)
  });
	const data = await res.json();
	console.log(JSON.stringify(data));
}

updateBook(1, {year:1990, author:'Mike Doe'})