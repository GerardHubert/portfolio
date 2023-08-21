import { useEffect } from 'react';
import './nav.css';
import PropTypes from 'prop-types';
function Nav({ scrollTop }) {
  useEffect(() => {
    handleScroll()
  })
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

  function handleScroll() {
    const navItemsElements = document.getElementsByClassName('nav-item');

    if (scrollTop >= 0) {
      navItemsElements[0].classList.add('hasfocus');
    } if (scrollTop > 683) {
      navItemsElements[0].classList.remove('hasfocus');
    }

    if (scrollTop >= 684) {
      navItemsElements[1].classList.add("hasfocus");
    } if (scrollTop < 684 || scrollTop >= 1596) {
      navItemsElements[1].classList.remove('hasfocus');
    }

    if (scrollTop >= 1596) {
      navItemsElements[2].classList.add('hasfocus');
    } if (scrollTop <= 1596 || scrollTop >= 2508) {
      navItemsElements[2].classList.remove('hasfocus');
    }

    if (scrollTop >= 2508) {
      navItemsElements[3].classList.add('hasfocus');
    } if (scrollTop <= 2508) {
      navItemsElements[3].classList.remove('hasfocus')
    }
  }
}

Nav.propTypes = {
  scrollTop: PropTypes.number
}

export default Nav;