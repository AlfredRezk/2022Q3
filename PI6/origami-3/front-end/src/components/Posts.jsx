import Post from './Post';

const Posts = ({posts}) => {
  return (
  
    <div className="Posts">
        {posts.map((orgami)=> <Post post={orgami} key={orgami._id}/>)}
    </div>

  )
}

export default Posts