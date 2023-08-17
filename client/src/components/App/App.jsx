import './app.css'
import Nav from '../Nav/Nav.jsx'
import Home from '../Home/Home.jsx'
import Skills from '../Skills/Skills'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function App() {

  return (
    <>
      <Nav />
      <main id='main' className='main'>
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
