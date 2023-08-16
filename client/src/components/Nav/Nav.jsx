import './nav.css'
function Nav() {

  return (
    <div className="navbar-container">
      <ul className="navbar">
        <li className="nav-item">
          <a href="#home-section">Accueil</a >
        </li>
        <li className="nav-item">
          <a href="#skills-section">Compétences</a>
        </li>
        <li className="nav-item">
          <a href="#portfolio-section">Portfolio</a>
        </li>
        <li className="nav-item">
          <a href="#contact-section">Contact</a>
        </li>
      </ul >
    </div>
  );
}

export default Nav;