const fetchPosts = async()=>{
    const url = 'http://localhost:8080/api/posts';

    const res = await fetch(url);
    const {data:posts}  = await res.json();

   const html =  posts.map(post=> `
    
    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card shadow my-2">
            <div class="card-header">
                <h3 class="text-center">${post.title}</h3>
            </div>
            <div class="card-body">
                <p>${post.body}</p>
            </div>
        </div> 
    
    </div>    
    `).join('')

    document.querySelector('.row').innerHTML = html;
}

fetchPosts()