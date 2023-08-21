import './footer.css'

function Footer() {
  return (
    <footer className='footer-section'>
      <div className="footer-container">
        <div className="footer-about-me-wrapper">
          <img className='footer-thumbnail' src="https://picsum.photos/200" alt="gérard hubert" />
          <a href="#home-section">
            <h2>A propos de moi</h2>
          </a>
        </div>
        <div className="footer-aside-container">
          <div className="footer-aside-wrapper">
            <h3 className="footer-subtitle">Compétences</h3>
            <p className='footer-paragraph'>
              <a href="#skills-section">
                Des applications web solides et fonctionnelles,
                adaptées aux différents appareils mobiles et
                offrant une agréable expérience utilisateur.
              </a>
            </p>
          </div>
          <div className="footer-aside-wrapper">
            <h3 className="footer-subtitle">Portfolio</h3>
            <p className="footer-paragraph">
              <a href="#portfoltio-section">
                Front-end, back-end, API, ou Symfony, jetez un oeil à mes
                réalisations.
              </a>
            </p>
          </div>
          <div className="footer-aside-wrapper">
            <h3 className="footer-subtitle">Contact</h3>
            <p className="footer-paragraph">Contactez-moi
              <a href="#contact-section"> par mail </a> ou retrouvez-moi sur les réseaux
            </p>
            <div className="networks-container">
              <a href="https://www.linkedin.com/in/g%C3%A9rard-hubert-ab6213206/" target='_blank' rel='noreferrer'>
                <img src="linkedin-icon.png" alt="linkedin" />
              </a>
              <a href="https://github.com/GerardHubert" target='_blank' rel='noreferrer'>
                <img src="github-icon.png" alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Les icones (sections portfolio et contact) viennent de <a rel='noreferrer' target="_blank" href="https://icons8.com">Icons8</a>
        <div className="copyright">
          <i className="fa-regular fa-copyright"></i>
          <span> 2023 - Gérard HUBERT</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;