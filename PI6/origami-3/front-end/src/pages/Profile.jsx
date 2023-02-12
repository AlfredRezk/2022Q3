import React from "react";
import "../assets/workshop-styles.css";
import { Posts } from "../components";
import { logout } from "../service";
import { useNavigate } from "react-router-dom";

const Profile = ({ posts , setIsAuth}) => {
  const navigate = useNavigate();
  
  const {id, username} = JSON.parse(localStorage.getItem('userData'))
  const userPosts = posts.filter(post => post.author._id === id)
  const latestThree = userPosts.slice(-3).reverse();

  const logoutHandler = async()=>{
    const res = await logout();
    setIsAuth(false);
    navigate('/');
  }

  return (
    <div className="Profile">
      <img
        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
        alt="user pic"
      />

      <div className="personal-info">
        <p> <span>Email:</span> {username}</p>
        <p> <span>Posts:</span> {userPosts.length} </p>

        <button onClick={logoutHandler} style={{width:'100px'}}> Logout</button>

      </div>

      <div>
        <h2> 3 of your recent posts</h2>
        <Posts posts={latestThree}/>
      </div>
    </div>
  );
};

export default Profile;
