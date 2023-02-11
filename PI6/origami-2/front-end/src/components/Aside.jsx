import React from 'react';
import Link from './Links';
import "../assets/workshop-styles.css";

const Aside = () => {
  return (
    <aside className="Aside">
        <ul>
        {[1,2,3,4,5,6,7,8,9,10,11].map((num, index)=>( <Link key={index.toString()} num={num}/>))}
        </ul>
    </aside>
  )
}

export default Aside