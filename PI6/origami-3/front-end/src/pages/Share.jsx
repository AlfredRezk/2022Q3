import React,{useState} from 'react';
import '../assets/workshop-styles.css';
import Posts from '../components/Posts';
import { addPost } from '../service';
import {useNavigate} from 'react-router-dom';


const Share = ({posts, updatePosts}) => {
    
  const [post, setPost] = useState('')
  const navigate = useNavigate();
  const lastThree = posts.slice(-3).reverse();


  const submitPost = async()=>{
    const res= await addPost(post);
    updatePosts()
    navigate('/')

  }
  return (

    <div className="Input">
        <div>
            <h1> Share your thoughts...</h1>
            <textarea onChange={(e)=> setPost(e.target.value)} value={post}></textarea>
            <button onClick={submitPost}>Post</button>
        </div>
        <div>
            <h2>Last 3 post on your wall</h2>
            <Posts posts={lastThree}/>
        </div>
    </div>

  )
}

export default Share