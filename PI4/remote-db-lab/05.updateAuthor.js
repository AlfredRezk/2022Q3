/** @format */

async function updateAuthor(bookId, author) {
	const url = `https://testappkingsland-default-rtdb.firebaseio.com/Books/${bookId}/author/.json`;
	const res = await fetch(url, {
		method: "PUT",
		body: JSON.stringify(author),
	});
	const data = await res.json();
	console.log(JSON.stringify(data));
}

updateAuthor(1, "John Doe");
