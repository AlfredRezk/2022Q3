import React from 'react';
import '../assets/workshop-styles.css';
import Posts from '../components/Posts';


const Share = ({posts}) => {
    
  const lastThree = posts.slice(-3).reverse();
  return (

    <div className="Input">
        <div>
            <h1> Share your thoughts...</h1>
            <textarea></textarea>
            <button>Post</button>
        </div>
        <div>
            <h2>Last 3 post on your wall</h2>
            <Posts posts={lastThree}/>
        </div>
    </div>

  )
}

export default Share