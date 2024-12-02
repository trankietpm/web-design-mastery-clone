import styles from './Subscribe.module.scss';

const Subscribe = () => {
  return (
    <section className={styles.subscribeContainer}>
      <div className={styles.subscribeContent}>
        <h2 className={styles.sectionHeader}>Stay Updated!</h2>
        <p className={styles.sectionDescription}>
          Subscribe to our newsletter for the latest travel deals, updates, and offers.
        </p>
        <form action="/">
          <input type="email" name="email" placeholder="Enter your email" required />
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
