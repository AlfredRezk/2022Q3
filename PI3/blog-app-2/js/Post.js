// import uuid4 from "uuid4";

export default class Post {
	static posts = [];

	constructor(title, image, body) {
		this.id = Date.now();
		this.title = title;
		this.image = image;
		this.body = body;
		this.likes = 0;
		this.dislikes = 0;
		this.comments = [];
	}

	add() {
		Post.posts.push(this);
	}
  
  static removeById(id) { 
  		const index = Post.posts.findIndex((p) => p.id === id);
			Post.posts.splice(index, 1);
  }
}
