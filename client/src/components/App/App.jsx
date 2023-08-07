import './app.css'
import Nav from '../Nav/Nav.jsx'
import Home from '../Home/Home.jsx'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
function App() {

  return (
    <>
      <Nav />
      <main id='main' className='main'>
        <Home />
        <Portfolio />
        <Contact />
      </main>
    </>
  )

}

export default App
