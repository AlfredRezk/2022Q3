import Banner from "./components/Banner/Banner";
import Feaatures from "./components/Feaatures";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";




function App() {

  const title = 'Best App';
  console.log(title);
  


  return (
    <div>
      <Navbar brand={title} bgColor="dark" color="dark"/>
      <Banner/>
      <main className="container">
        <Feaatures/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
