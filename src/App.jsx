import './App.css'
import Hero from "./sections/Hero";
import About from "./sections/About";
import Header from "./sections/Header";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits"
import Gallery from "./sections/Gallery"
import Reviews from "./sections/Reviews"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="container mx-auto my-0 max-w-[1440px] overflow-x-hidden w-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
      <Gallery />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
