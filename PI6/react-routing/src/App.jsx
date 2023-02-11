import Navigation from "./components/Navigation";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";


function App() {
  return (

    <>

    <Navigation/>
    <div className="container">

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products/:id" element={<Products/>}/>
    </Routes>    

    </div>

    </>
    
  );
}

export default App;
