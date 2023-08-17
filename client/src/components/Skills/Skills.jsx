import './skills.css';

function Skills() {
  return (
    <section id='skills-section' className="skills-section">
      <header className='section-header'>
        <h2 className="section-title">Compétences</h2>
        <div className="section-title-separator">
          <hr className='separator' />
          <i className="fa-solid fa-code separator-icon"></i>
        </div>
        <p className='skills-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aspernatur accusantium laboriosam porro, amet, dignissimos natus harum quam aut minima nobis. Nostrum, dolorem facilis mollitia repudiandae eos, animi fuga soluta maiores molestias culpa ut error. Voluptatum laborum cupiditate, saepe nulla suscipit officia dolore? Blanditiis dolor itaque saepe vitae, beatae eveniet.</p>
      </header>
      <div className="skills-container">
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/front-end.png" alt="développement front-end" />
          </div>
          <h3 className='card-title'>front-end</h3>
          <p>
            Un site statique avec une expérience utilisateur agréable est la meilleure façon d'assurer votre présence en ligne.
            Des fonctionnalités issues d'applications tierces permettent aussi de le dynamiser.
          </p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/back-end.png" alt="développement back-end" />
          </div>
          <h3 className='card-title'>back-end</h3>
          <p>Les sites dynamiques avec bases de données, espaces utilisateurs, dashboard..
            Idéal si vous prévoyez une expérience personnalisée ou un système de comptes.
          </p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/responsive.png" alt="design responsive" />
          </div>
          <h3 className='card-title'>responsive</h3>
          <p>Parce que le web ne se consulte plus uniquement devant un ordinateur, le responsive design a pour but d'adapter
            le contenu aux différents appareils, tout en conservant une expérience tout aussi agréable.
          </p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/handshake.png" alt="accompagnement et agilité" />
          </div>
          <h3 className='card-title'>agile | problem solver</h3>
          <p>
            Les idées et changements (tout comme les problèmes) peuvent survenir en cours de développement.
            Je m'adapte (avec agilité) pour répondre à ces changement et faire évoluer le site dans le bon sens.
          </p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/tests.png" alt="applications testée et approuvée" />
          </div>
          <h3 className='card-title'>testé</h3>
          <p>
            Les tests apportent encore plus de qualité au code, car ils assurent son bon fonctionnement et minimise l'apparition de bogues.
            C'est l'assurance qu'on ne casse rien à mesure qu'on ajoute de nouvelles fonctionnalités.
          </p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/standards.png" alt="standard web w3c et accessibilité" />
          </div>
          <h3 className='card-title'>standards web</h3>
          <p>Les sites web doivent obeir à certains standards, notamment d'accessibilité, afin d'être consultables par le plus grand nombre.</p>
        </div>
      </div>
    </section >
  );
}

export default Skills;