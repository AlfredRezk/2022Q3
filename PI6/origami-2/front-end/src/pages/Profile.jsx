import React from "react";
import "../assets/workshop-styles.css";
import { Posts } from "../components";

const Profile = ({ posts }) => {
    const latestThree = posts.slice(-3).reverse();

  return (
    <div className="Profile">
      <img
        src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
        alt="user pic"
      />

      <div className="personal-info">
        <p> <span>Email:</span> someone@someday.gg</p>
        <p> <span>Posts:</span> 9 </p>
      </div>

      <div>
        <h2> 3 of your recent posts</h2>
        <Posts posts={latestThree}/>
      </div>
    </div>
  );
};

export default Profile;
