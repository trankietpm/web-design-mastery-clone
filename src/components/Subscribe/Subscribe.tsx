import styles from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <section className={`${styles.sectionContainer} ${styles.subscribeContainer}`} id="contact">
      <h2 className={styles.sectionHeader}>
        Subscribe To Get The Latest News <span>About Us</span>
      </h2>
      <p className={styles.sectionDescription}>
        Stay updated with the latest travel deals, destination highlights, and
        exclusive offers. Subscribe now and never miss out on exciting news and
        updates about our services!
      </p>
      <form action="/">
        <input type="text" placeholder="Your Email" className={styles.emailInput} />
        <button type="submit" className={styles.btn}>Subscribe</button>
      </form>
    </section>
  );
};

export default Subscribe;