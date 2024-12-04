import React from 'react';
import Image from 'next/image';
import styles from './Header.module.scss';
import 'remixicon/fonts/remixicon.css';

const Header: React.FC = () => {
  return (
    <header id="home" className={styles.headerContainer}>
      <div className={styles.sectionContainer} >
        <div className={styles.headerContent}>
          <h4>Welcome</h4>
          <h1>
            Pet
            <br />
            <span>Doctor</span>
          </h1>
          <h2>We love pets like you do :)</h2>
          <p>
            From routine check-ups to specialized treatments, we&apos;re here to 
            ensure your pets lead happy, healthy lives.
          </p>
          <div className={styles.headerBtn}>
            <button>
              Start Here!
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </button>
          </div>
        </div>
        <div className={styles.headerImage}>
          <Image
            src="/images-pet/header-bg.png"
            alt="header-bg"
            className={styles.headerImageBg}
            width={300}
            height={254}
          />
          <Image
            src="/images-pet/header.png"
            alt="header"
            width={500}
            height={632}
          />
        </div>
      </div>
      <div className={styles.headerBottom}></div>
    </header>
  );
};

export default Header;
