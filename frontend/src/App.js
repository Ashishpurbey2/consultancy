import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
// import Carousel1 from './components/Carousel1'
import ProductCard from './components/ProductCard'
import HomeScreen from './screens/HomeScreen'
function App() {
  return (
    <>
    <Header/>
      <HomeScreen />
    <Footer/>
    </>
  )
}

export default App
