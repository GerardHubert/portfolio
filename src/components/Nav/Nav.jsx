import './nav.css'
function Nav() {

  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="nav-item">
          <a href="/">Accueil</a >
        </li>
        <li className="nav-item">
          <a href="/skills">Compétences</a>
        </li>
        <li className="nav-item">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="/contact">Contact</a>
        </li>
      </ul >
    </div >
  );
}

export default Nav;