import React from 'react';
import '../assets/workshop-styles.css';

const Link = ({num}) => {
  return (
    <li className="listItem"> 
    <a href="#"> Going to {num}</a>
     </li>
  )
}

export default Link