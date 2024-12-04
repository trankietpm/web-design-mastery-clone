import React from 'react';
import styles from './Footer.module.scss';
import 'remixicon/fonts/remixicon.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`${styles.sectionContainer} ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <div className={styles.footerLogo}>
            <a href="#">Pet Place</a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>Company</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Address</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">New Delhi, India</a></li>
            <li><a href="#">View on Maps</a></li>
          </ul>
          <br />
          <h4>Inquiries</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">+91 0987654321</a></li>
            <li><a href="#">info@website.com</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Newsletter</h4>
          <p>Stay updated with our latest news</p>
          <form action="/submit">
            <input type="text" placeholder="Your email" />
            <button className="btn">
              <i className="ri-arrow-right-line"></i>
            </button>
          </form>
          <br />
          <h4>Follow Us</h4>
          <ul className={styles.footerSocials}>
            <li>
              <a href="#"><i className="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-twitter-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-youtube-fill"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-pinterest-line"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i className="ri-tiktok-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBar}>
        Copyright © 2024 Web Design Mastery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
