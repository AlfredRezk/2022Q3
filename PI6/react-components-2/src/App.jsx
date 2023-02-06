import React from 'react'
import About from './Components/About/About';
import Home from './Components/Home/Home';
// import Todos from './Components/Todos'

const App = () => {
  return (
    
    <main className="container mt-5">
      {/* <Todos/> */}
      <About/>
      <Home/>
    </main>
  )
}

export default App