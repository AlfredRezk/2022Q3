import Aside from "./components/Aside";
import Footer from "./components/Footer";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="Container">
        <Aside />
        <Main>
        </Main>
      </div>
      <Footer/> 
    </div>
  );
}

export default App;
