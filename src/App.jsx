import './App.css'
import Hero from "./sections/Hero";
import About from "./sections/About";
import Header from "./sections/Header";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits"

function App() {
  return (
    <div className="container mx-auto my-0 max-w-[1440px] overflow-x-hidden w-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Benefits />
    </div>
  )
}

export default App
