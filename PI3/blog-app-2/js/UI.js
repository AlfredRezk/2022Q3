import Post from "./Post.js";

export default class UI {
	add() {
		const main = document.querySelector("main");

		main.innerHTML = `
     <section id="add-post" class="col-md-8 mx-auto my-5">
       <div class="card shadow" >
        <div class="card-header text-center bg-primary text-light">ADD</div>
        <div class="card-body">
          <form id="add-form">
            <div class="form-group my-2">
              <input type="text" class="form-control" placeholder="Post Title" id="title">
            </div>
            <div class="form-group my-2">
              <input type="text" class="form-control" placeholder="Post Image URL" id="image-url">
            </div>
            
            <div class="form-group my-2">
              <textarea id="editor"></textarea>
            </div>

            <div class="text-center">
              <button type="submit" class="btn btn-primary" id="submit-btn">ADD</button>
            </div>

          </form>
        </div>
      </div>
     </section>
    `;

		CKEDITOR.replace("editor");
	}

	home() {
		const main = document.querySelector("main");

		let postsHTML = `<p class="text-center"> No Posts Add one ..</p>`;

		if (Post.posts.length > 0) {
			postsHTML = Post.posts
				.map(
					(post) => `
    
      <div class="card col-md-6 col-lg-4 col-12 col-xl-3 px-0 m-3" id="${post.id}">
        
        <img src='${post.image}' alt="Post img" class="card-img-top" width="100%">
        <div class="card-body">
          <h5 class="card-title text-center">${post.title}</h5>
          <p class="small text-center"> Posted on 12/13/2022 3:20pm</p>
          <p class="card-text"> ${post.body}</p>
        </div>

        <div class="card-actions d-flex justify-content-between">
          <div>
          <button class="btn"> <span class="material-icons like-btn"
             data-bs-toggle="tooltip"  data-bs-title="Like" data-bs-placement="top">  
             thumb_up</span></button>
          <button class="btn"> <span class="material-icons dislike-btn"
            data-bs-toggle="tooltip"  data-bs-title="Dislike"
            > thumb_down</span></button>
          <button class="btn"> <span class="material-icons comment-btn"
            data-bs-toggle="tooltip"  data-bs-title="Comment"
            > comment</span></button>

          </div>
          <div>
          <button class="btn "> <span class="material-icons edit-btn" 
            data-bs-toggle="tooltip"  data-bs-title="Edit"
            > edit</span></button>
          <button class="btn "> <span class="material-icons delete-btn"
            data-bs-toggle="tooltip"  data-bs-title="Delete"
            > delete</span></button>
  
          </div>
        </div>

      </div>
    
    `
				)
				.join("");
		}

		const section = ` <section id="posts" class="row"> ${postsHTML}</section>`;
		main.innerHTML = section;
	}
}
