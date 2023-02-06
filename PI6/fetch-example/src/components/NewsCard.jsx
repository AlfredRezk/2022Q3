import React from "react";

const NewsCard = ({ article, onDelete}) => {
  const { author, title, description, url, urlToImage, publishedAt } = article;
  return (
    <div className="col-md-6 m-2 col-lg-4 col-xl-3">
      <div class="card" >
        <img class="card-img-top" src={urlToImage} alt="Card image cap" />
        <div class="card-body text-center">
          <h4 class="card-title">{title}</h4>
          {author&& <h5 class="card-title">Author: {author}</h5>}
           <h6 class="card-title">Date: {new Date(publishedAt).toLocaleDateString('en-US')}</h6>
          <p class="card-text">
            {description}
          </p>
          <a href={url} class="btn btn-primary">
            Read More
          </a>



        </div>
        <div className="card-footer text-center">
            <button className="btn btn-danger" onClick={()=>onDelete(title)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
