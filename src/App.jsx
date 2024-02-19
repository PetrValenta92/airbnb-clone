import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import katiePhoto from "./images/katie-zaferes.png";
import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Card 
        img = { katiePhoto }
        rating = {"5.0"}
        reviewCount = {6}
        country = {"USA"}
        title = {"Life lesson with Katie Zaferes"}
        price = {136}
      />
    </>
  )
}

export default App
