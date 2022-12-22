

async function addBooks(title, author) {
	const url = "https://testappkingsland-default-rtdb.firebaseio.com/Books/.json";
  const res = await fetch(url, {
    method: 'Post',
    body: JSON.stringify({title, author})
  });
	const data = await res.json();
	console.log(JSON.stringify(data));
}

addBooks('New Title', 'New Author');
