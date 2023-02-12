import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
import { getOrigami } from "./service";
import {Aside, Footer, Navigation} from './components'
import {Login, Register, Publications, Share, Profile, Error} from './pages'


function App() {

  const [origamis, setOrigamis] = useState([])

  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem('userData')));

  useEffect(()=>{
     getOrigami().then(data=> {
         console.log(data);
         setOrigamis(data)
     }).catch(err=> console.log(err))
  }, [])


  const updatePosts = ()=>{
    getOrigami().then(data=> {
      console.log(data);
      setOrigamis(data)
  }).catch(err=> console.log(err))
  }

  return (
    <div className="App">
      <Navigation isAuth={isAuth} setIsAuth = {setIsAuth}/>
      <div className="Container">
        <Aside isAuth={isAuth} setIsAuth = {setIsAuth}/>
      
      <main className="Main">
        <Routes>
          <Route path="/" element={<Publications posts={origamis}/>}/>
          <Route path="/post" element={<Share posts={origamis} updatePosts={updatePosts}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/>
          <Route path='/profile' element={<Profile posts={origamis} setIsAuth= {setIsAuth} />}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
       </div>
      <Footer isAuth={isAuth} setIsAuth = {setIsAuth}/> 
    </div>
  );
}

export default App;
