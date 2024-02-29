import './App.css'
import React from 'react';
import Hero from "./sections/Hero";
import About from "./sections/About";
import Header from "./sections/Header";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits"
import Gallery from "./sections/Gallery"
import Reviews from "./sections/Reviews"
import Footer from "./sections/Footer"
import QuoteForm from './components/quoteForm';


function App() {
  const [openQuote, setOpenQuote] = React.useState(false)
  const [lang, setLang] = React.useState("fr")
  return (
    <div className="container mx-auto my-0 max-w-[1440px] w-screen">
      {

        openQuote && <QuoteForm setOpenQuote={setOpenQuote} lang={lang} />
      }
      <Header setOpenQuote={setOpenQuote} lang={lang} />
      <Hero setOpenQuote={setOpenQuote} lang={lang} />
      <About lang={lang} />
      <Services setOpenQuote={setOpenQuote} lang={lang} />
      <Benefits setOpenQuote={setOpenQuote} lang={lang} />
      <Gallery lang={lang} />
      <Reviews lang={lang} />
      <Footer setOpenQuote={setOpenQuote} lang={lang} />
      <div className='fixed overflow-hidden bottom-2 translate-x-[20%] rounded-xl bg-white flex border border-solid border-[#A7D4E0] text-[#48487F]'>
        <button className={`py-3 px-8 ${lang === "en" ? 'text-[#F2F2FC] bg-[#48487F]' : ''}`} onClick={() => setLang("en")}>
          En
        </button>
        <button className={`border-l border-solid  border-[#E6E6E6] py-3 px-8 ${lang === "fr" ? 'text-[#F2F2FC] bg-[#48487F]' : ''}`} onClick={() => setLang("fr")}>Fr</button>
      </div>
    </div>
  )
}

export default App
