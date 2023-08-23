import './home.css';

function Home() {
  return (
    <section id="home-section" className="home-section">
      <div className="about-me">
        <h1 className='home-section-title'>Hey je suis Gérard, Développeur web PHP | Symfony</h1>
        <p>Passioné par le web et les novelles technologies, je développe des applications et site web.
          Du site vitre en single page au site e-commerce en passant par les blogs ou espaces administrateurs, j'adore voir prendre vie les projets.
          Je suis compétent en front-end, en intégrationii web et avec Javascript, React.JS et Node.JS, mais j'ai une appétence particulière pour le développement côté serveur sous PHP et Symfony.
          Sinon, quand je ne m'arrache pas les cheveux devant un écran noir, j'apprécie les longues balades avec ma famille et mon chien (ou un bon vieux film d'arts martiaux s'il pleut).
          N'hésitez pas à <a href='#contact'>me contacter</a> pour discuter de votre projet ou des nouvelles fonctionnalités que vous aimeriez apporter à votre site.
        </p>
      </div>
      <div className="selfie-container">
        <img src="avatar.png" alt="gérard hubert" className="selfie" />
      </div>
    </section>
  );
}

export default Home;