import './app.css'
import Nav from '../Nav/Nav.jsx'
import Home from '../Home/Home.jsx'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { useState } from 'react'

function App() {

  const [scrollTop, setScrollTop] = useState(0);

  function handleScroll(e) {
    setScrollTop(e.target.scrollTop);
  }

  return (
    <>
      <Nav scrollTop={scrollTop} />
      <main id='main' className='main' onScroll={e => handleScroll(e)}>
        <Home />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </>
  )

}

export default App
