import './portfolio.css'
function Portfolio() {
  const badges = document.getElementsByClassName('badge');

  return (
    <section id="portfolio-section" className='portfolio-section'>
      <h2 className='section-title'>portfolio</h2>
      <div className="portfolio-cards-container">
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="https://rhpaieenconfiance.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(1)}
              onPointerLeave={() => handlePointerLeaveThumbnail(1)}>
              <img src="/rh_paie_en_confiance.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-1">HTML5</span>
                <span className="badge badge-1">CSS3</span>
                <span className="badge badge-1">React.JS</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Un site vitrine, en single page sous React.JS, fait pour un réseau de mise en relations entre entreprises et freelance dans le domaine des ressources humaines et de la paie.
            </div>
          </div>
          <div className="portfolio-card-legend">RH-Paie en Confiance</div>
        </div>
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="https://on-mate-quoi.papajoueur.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(2)}
              onPointerLeave={() => handlePointerLeaveThumbnail(2)}>
              <img src="/on_mate_quoi.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-2">PHP</span>
                <span className="badge badge-2">Twig</span>
                <span className="badge badge-2">MariaDB</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Projet personnel de recommandations ciné. Basé sur l'API TMDB, sous PHP 8 en orienté objet et MariaDB pour al base de données.
            </div>
          </div>
          <div className="portfolio-card-legend">On mate quoi ?</div>
        </div>
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="https://game-quizz.papajoueur.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(3)}
              onPointerLeave={() => handlePointerLeaveThumbnail(3)}>
              <img src="/game_quizz.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-3">Javascript</span>
                <span className="badge badge-3">ReactJS</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Mini jeu basé sur l'API Rawg.io. Il s'agit de découvrir le titre du jeu dont l'image est affichée, parmi 4 réponses aléatoires. 20 tentatives, et points à la fin.
            </div>
          </div>
          <div className="portfolio-card-legend">Game Quizz</div>
        </div>
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="#"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(4)}
              onPointerLeave={() => handlePointerLeaveThumbnail(4)}>
              <img src="/papajoueur.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-4">PHP</span>
                <span className="badge badge-4">Symfony</span>
                <span className="badge badge-4">PHPUnit</span>
                <span className="badge badge-4">Twig</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam dicta iste vel aliquid? Suscipit, at quidem! Dicta, nisi rem, minus deserunt corrupti dolore sint aperiam sequi dolorum qui pariatur?
            </div>
          </div>
          <div className="portfolio-card-legend">Papajoueur</div>
        </div>
      </div>
    </section>
  );

  function handlePointerOnThumbnail(thumbnail) {
    for (const i of badges) {
      if (i.classList.contains(`badge-${thumbnail}`)) {
        i.classList.add('show-badge');
      }
    }
  }

  function handlePointerLeaveThumbnail(thumbnail) {
    for (const i of badges) {
      if (i.classList.contains(`badge-${thumbnail}`)) {
        i.classList.remove('show-badge');
      }
    }
  }


}

export default Portfolio;