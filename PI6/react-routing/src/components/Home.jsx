import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { Navigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate()
  const [navState, setNavState] = useState(false);

  return (
  
  <>
   <div>Home</div>
   {/* <Button onClick={()=> navigate('/about')}>Go About</Button> */}
   <Button onClick={()=> setNavState(true)}>Go About</Button>
    {navState&& <Navigate to="/about"/> }
  </>
   
  
  )
}

export default Home