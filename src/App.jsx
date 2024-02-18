import './App.css'
import Hero from "./sections/Hero";
import About from "./sections/About";
import Header from "./components/Header"

function App() {
  return (
    <div className="container mx-auto my-0 max-w-[1440px] overflow-x-hidden w-screen">
      <Header />
      <Hero />
      <About />
    </div>
  )
}

export default App
