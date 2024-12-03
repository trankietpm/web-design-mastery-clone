import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer} >
      <div className={`${styles.sectionContainer} ${styles.footerContainer}`}>
        <div className={styles.footerCol}>
          <div className={styles.footerLogo}>
            <a href="#">TravelToor</a>
          </div>
          <p>
            Explore the world with us! Connect through our social media
            channels, find quick links to essential resources, and access 24/7
            support to make your travel planning effortless.
          </p>
          <ul className={styles.footerSocials}>
            <li>
              <a href="#">
                <Image src="/images/facebook-fill.png" alt="Facebook" width={35} height={35} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/images/twitter-fill.png" alt="Twitter" width={35} height={35} />
              </a>
            </li>
            <li>
              <a href="#">
                <Image src="/images/instagram-fill.png" alt="Instagram" width={35} height={35} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul className={styles.footerLinks}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Destinations</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy</a></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Instagram</h4>
          <div className={styles.footerColFlex}>
            <Image src="/images/instagram-1.jpg" alt="instagram" width={75} height={75} />
            <Image src="/images/instagram-2.jpg" alt="instagram" width={75} height={75} />
            <Image src="/images/instagram-3.jpg" alt="instagram" width={75} height={75} />
            <Image src="/images/instagram-4.jpg" alt="instagram" width={75} height={75} />
            <Image src="/images/instagram-5.jpg" alt="instagram" width={75} height={75} />
            <Image src="/images/instagram-6.jpg" alt="instagram" width={75} height={75} />
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>Contact</h4>
          <ul className={styles.footerLinks}>
            <li>
              <a href="#">
                <span><Image src="/images/phone-fill.png" alt="Phone" width={20} height={20} /></span> +91 0987654321
              </a>
            </li>
            <li>
              <a href="#">
                <span><Image src="/images/map-pin-line.png" alt="Location" width={20} height={20} /></span> New Delhi, India
              </a>
            </li>
            <li>
              <a href="#">
                <span><Image src="/images/mail-fill.png" alt="Email" width={20} height={20} /></span> info@carrental
              </a>
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
