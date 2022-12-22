async function getBook(bookId) {
	const url = `https://testappkingsland-default-rtdb.firebaseio.com/Books/${bookId}/.json`;
	const res = await fetch(url);
	const data = await res.json();
	console.log(JSON.stringify(data));
}

getBook(1);
