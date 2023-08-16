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
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit officia praesentium similique expedita nobis necessitatibus doloribus adipisci atque vitae?</p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/back-end.png" alt="développement back-end" />
          </div>
          <h3 className='card-title'>back-end</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit officia praesentium similique expedita nobis necessitatibus doloribus adipisci atque vitae?</p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/responsive.png" alt="design responsive" />
          </div>
          <h3 className='card-title'>responsive</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit officia praesentium similique expedita nobis necessitatibus doloribus adipisci atque vitae?</p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/handshake.png" alt="accompagnement et agilité" />
          </div>
          <h3 className='card-title'>evolutif</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit officia praesentium similique expedita nobis necessitatibus doloribus adipisci atque vitae?</p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/tests.png" alt="applications testée et approuvée" />
          </div>
          <h3 className='card-title'>testé</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit officia praesentium similique expedita nobis necessitatibus doloribus adipisci atque vitae?</p>
        </div>
        <div className="skill-card">
          <div className="image-wrapper">
            <img src="public/standards.png" alt="standard web w3c et accessibilité" />
          </div>
          <h3 className='card-title'>respect des standards web</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque impedit officia praesentium similique expedita nobis necessitatibus doloribus adipisci atque vitae?</p>
        </div>
      </div>
    </section >
  );
}

export default Skills;