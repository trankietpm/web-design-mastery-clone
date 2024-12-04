import React, { useState } from 'react';
import styles from './NavBar.module.scss';
import 'remixicon/fonts/remixicon.css';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={styles.navLogo}>
          <a href="#">Pet Place</a>
        </div>
        <div className={styles.navMenuBtn} onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#store">Store</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
