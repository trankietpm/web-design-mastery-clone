import styles from './Testimonials.module.scss';

const Testimonials = () => {
  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.testimonialsContent}>
        <h2 className={styles.sectionHeader}>What Our Clients Say</h2>
        <p className={styles.sectionDescription}>
          Hear from our happy customers who have explored amazing destinations with us.
        </p>
        <div className={styles.testimonialItems}>
          <div className={styles.testimonialItem}>
            <p className={styles.testimonialText}>
            &quot;It was the best trip ever! Everything was well planned and perfectly executed. Highly recommend!&quot;
            </p>
            <h5>- John Doe</h5>
          </div>
          <div className={styles.testimonialItem}>
            <p className={styles.testimonialText}>
            &quot;Amazing experience, the team made it all smooth and enjoyable. I will definitely book again!&quot;
            </p>
            <h5>- Jane Smith</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
