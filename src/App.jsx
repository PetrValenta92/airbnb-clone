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
          coverImg = { `/airbnb-clone/src/images/${card.coverImg}` }
          rating = { card.stats.rating }
          reviewCount = { card.stats.reviewCount }
          location = { card.location }
          title = { card.title }
          price = { card.price }
          openSpots = { card.openSpots }
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
