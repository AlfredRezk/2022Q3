import React from 'react';
import Link from './Links';
import "../assets/workshop-styles.css";
import Links from './Links';

const Aside = ({isAuth, setIsAuth}) => {
  return (
    <aside className="Aside">
        <ul>
          <Links isAuth={isAuth} setIsAuth = {setIsAuth}/>
        </ul>
    </aside>
  )
}

export default Aside