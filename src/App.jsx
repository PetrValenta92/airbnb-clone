import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from "./data";
import './App.css';

function App() {

  const cardElements = data.map( card => {
    return (
      <Card 
          key = { card.id }
          card = { card }
      />
    )  
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        { cardElements }
      </section>
    </>
  )
}

export default App
