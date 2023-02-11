import React from 'react';
import Posts from '../components/Posts';

const Publications = ({posts}) => {
  return (
    <>
    <h1> Publications</h1>
    <Posts posts={posts}/>
    </>
    

  )
}

export default Publications