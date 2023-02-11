import React, {useEffect, useState} from 'react';
import { getOrigami } from '../service';
import Post from './Post';

const Posts = () => {

 const [origamis, setOrigamis] = useState([])

 useEffect(()=>{
    getOrigami().then(data=> {
        console.log(data);
        setOrigamis(data)
    }).catch(err=> console.log(err))
 }, [])

  return (
    

    <div className="Posts">
        {origamis.map((orgami)=> <Post post={orgami} key={orgami._id}/>)}
    </div>

  )
}

export default Posts