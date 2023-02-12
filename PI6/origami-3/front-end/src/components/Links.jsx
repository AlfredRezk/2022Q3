import React from "react";
import { NavLink , useNavigate} from "react-router-dom";
import "../assets/workshop-styles.css";
import { logout } from "../service";

const Links = ({ isAuth, setIsAuth}) => {

  const navigate = useNavigate()
 
  const logoutHandler = async()=>{
    const res = await logout();
    console.log(res);
    setIsAuth(false);
    navigate('/');
  }
 
 
  return (
    <>
    {isAuth? (
        <>
          <li className="listItem">
            <NavLink to="/post"> Post</NavLink>
          </li>
          <li className="listItem">
            <NavLink to="/profile"> Profile</NavLink>
          </li>
          <li className="listItem"> 
              <button onClick={logoutHandler} id="logoutBtn"> Logout</button>
          </li>
        </>
    ) : (

      <>
        <li className="listItem">
        <NavLink to="/register"> Register</NavLink>
      </li>
      <li className="listItem">
        <NavLink to="/login"> Login</NavLink>
      </li> 
      </>
    )}    
    </>
  );
};

export default Links;
