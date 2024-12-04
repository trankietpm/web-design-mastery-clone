import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={`${styles.sectionContainer} ${styles.headerContainer}`} id="home">
      <div className={styles.headerContent}>
        <h1>
          <span>Let&apos;s</span> Create Memorable Journey
        </h1>
        <p className={styles.sectionDescription}>
          Embark on an unforgettable adventure with us! Discover breathtaking destinations, create lasting memories, and make every journey remarkable.
        </p>
        <form action="/">
          <div className={styles.inputGroup}>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" placeholder="Lakshadweep" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="date">Date</label>
            <input type="text" name="date" placeholder="26 Mar, Fri" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="price">Price</label>
            <input type="text" name="price" placeholder="Rs. 42,000" />
          </div>
          <button className={styles.btn}>
            <Image src="/images/search-line.png" alt="Search Icon" width={24} height={24} />
          </button>
        </form>
      </div>
      <div className={styles.headerImage}>
        <Image src="/images/header-1.jpg" alt="header" width={285} height={302} />
        <Image src="/images/header-2.jpg" alt="header" width={285} height={302} />
        <Image src="/images/header-3.jpg" alt="header" width={435} height={408} />
        <Image src="/images/bg.png" alt="bg" width={160} height={160} />
      </div>
    </header>
  );
};

export default Header;
