import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navHeader}>
        <div className={styles.navLogo}>
          <a href="#">Travel<span>Toor</span></a>
        </div>
        <div 
          className={styles.navMenuBtn} 
          onClick={toggleMenu} 
          id="menu-btn"
        >
          <Image 
            src={isMenuOpen ? "/images/close-line.png" : "/images/menu-3-line.png"} 
            alt="Menu Icon" 
            width={24} 
            height={24} 
            priority 
          />
        </div>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`} id="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#package">Packages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={styles.navBtns}>
        <button className={styles.btn}>Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
