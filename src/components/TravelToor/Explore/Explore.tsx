import Image from 'next/image';
import styles from './Explore.module.scss';

const Explore = () => {
  return (
    <section className={`${styles.sectionContainer} ${styles.exploreContainer}`}>
      <div className={styles.exploreImage}>
        <Image 
          src="/images/explore.jpg" 
          alt="explore" 
          width={475} 
          height={594} 
          layout="intrinsic"
        />
      </div>
      <div className={styles.exploreContent}>
        <p className={styles.sectionSubheader}>Explore With Us</p>
        <h2 className={styles.sectionHeader}>
          Choose Dream Destinations For <span>Explore World</span>
        </h2>
        <p className={styles.sectionDescription}>
          Discover a world of wonders! Select from our curated list of dream
          destinations and start your journey to explore breathtaking
          landscapes, vibrant cultures, and unforgettable experiences.
        </p>
        <div className={styles.exploreBtn}>
          <button className={styles.btn}>About Us</button>
        </div>
        <div className={styles.exploreGrid}>
          <div>
            <h4>14</h4>
            <p>Years<br />Experience</p>
          </div>
          <div>
            <h4>67+</h4>
            <p>Destinations<br />Celebrations</p>
          </div>
          <div>
            <h4>320+</h4>
            <p>Happy<br />Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
