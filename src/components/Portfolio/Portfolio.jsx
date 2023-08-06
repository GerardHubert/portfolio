import './portfolio.css'

function Portfolio() {

  return (
    <section className='portfolio-section'>
      <h2 className='section-title'>portfolio</h2>
      <div className="portfolio-cards-container">
        <div className='portfolio-card'>
          <div id='thumbnail-wrapper' className="thumbnail-wrapper">
            <a href="https://rhpaieenconfiance.fr"
              className="portfolio-card-link"
              target='_blank'
              rel='noreferrer'
              onPointerEnter={() => handlePointerOnThumbnail()}>
              <img id='thumbnail' src="/public/rh_paie_en_confiance.png" alt="minitature du site" className="thumbnail" />
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

  function handlePointerOnThumbnail() {
    console.log(document.getElementsByClassName('thumbnail-wrapper'))
  }

}

export default Portfolio;