import './App.css'
import Destinations from './components/Destinations/Destinations'
import Footer from './components/Footer/Footer'
import Middle from './components/Middle/Middle'
import Portfolio from './components/Portfolio/Portfolio'
import Questions from './components/Questions/Questions'
import Reviews from './components/Reviews/Reviews'
import Subscribe from './components/Subscribe/Subscribe'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Reviews />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
