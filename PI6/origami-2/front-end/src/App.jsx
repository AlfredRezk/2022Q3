import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react';
import { getOrigami } from "./service";
import {Aside, Footer, Navigation} from './components'
import {Login, Register, Publications, Share, Profile, Error} from './pages'


function App() {

  const [origamis, setOrigamis] = useState([])

  useEffect(()=>{
     getOrigami().then(data=> {
         console.log(data);
         setOrigamis(data)
     }).catch(err=> console.log(err))
  }, [])

  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
      
      <main className="Main">
        <Routes>
          <Route path="/" element={<Publications posts={origamis}/>}/>
          <Route path="/post" element={<Share posts={origamis}/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/profile' element={<Profile posts={origamis}/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </main>
       </div>
      <Footer/> 
    </div>
  );
}

export default App;
