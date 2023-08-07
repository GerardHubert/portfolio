import './portfolio.css'
function Portfolio() {
  const badges = document.getElementsByClassName('badge');

  return (
    <section className='portfolio-section'>
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
              <img src="/public/rh_paie_en_confiance.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-1">Lorem, ipsum.</span>
                <span className="badge badge-1">Lorem</span>
                <span className="badge badge-1">Lorem, ipsum.</span>
                <span className="badge badge-1">Ipsum.</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam dicta iste vel aliquid? Suscipit, at quidem! Dicta, nisi rem, minus deserunt corrupti dolore sint aperiam sequi dolorum qui pariatur?
            </div>
          </div>
          <div className="portfolio-card-legend">RH-Paie en Confiance</div>
        </div>
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="https://rhpaieenconfiance.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(2)}
              onPointerLeave={() => handlePointerLeaveThumbnail(2)}>
              <img src="/public/rh_paie_en_confiance.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-2">Lorem, ipsum.</span>
                <span className="badge badge-2">Lorem</span>
                <span className="badge badge-2">Lorem, ipsum.</span>
                <span className="badge badge-2">Ipsum.</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam dicta iste vel aliquid? Suscipit, at quidem! Dicta, nisi rem, minus deserunt corrupti dolore sint aperiam sequi dolorum qui pariatur?
            </div>
          </div>
          <div className="portfolio-card-legend">RH-Paie en Confiance</div>
        </div>
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="https://rhpaieenconfiance.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(3)}
              onPointerLeave={() => handlePointerLeaveThumbnail(3)}>
              <img src="/public/rh_paie_en_confiance.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-3">Lorem, ipsum.</span>
                <span className="badge badge-3">Lorem</span>
                <span className="badge badge-3">Lorem, ipsum.</span>
                <span className="badge badge-3">Ipsum.</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam dicta iste vel aliquid? Suscipit, at quidem! Dicta, nisi rem, minus deserunt corrupti dolore sint aperiam sequi dolorum qui pariatur?
            </div>
          </div>
          <div className="portfolio-card-legend">RH-Paie en Confiance</div>
        </div>
        <div className='portfolio-card'>
          <div className="thumbnail-wrapper">
            <a href="https://rhpaieenconfiance.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail(4)}
              onPointerLeave={() => handlePointerLeaveThumbnail(4)}>
              <img src="/public/rh_paie_en_confiance.png" alt="minitature du site" className="thumbnail" />
              <div className="badges-container">
                <span className="badge badge-4">Lorem, ipsum.</span>
                <span className="badge badge-4">Lorem</span>
                <span className="badge badge-4">Lorem, ipsum.</span>
                <span className="badge badge-4">Ipsum.</span>
              </div>
            </a>
            <div className="portfolio-card-details">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aliquam dicta iste vel aliquid? Suscipit, at quidem! Dicta, nisi rem, minus deserunt corrupti dolore sint aperiam sequi dolorum qui pariatur?
            </div>
          </div>
          <div className="portfolio-card-legend">RH-Paie en Confiance</div>
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