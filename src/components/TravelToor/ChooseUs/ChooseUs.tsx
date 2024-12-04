import Image from 'next/image';
import styles from './ChooseUs.module.scss';

const ChooseUs = () => {
  return (
    <section className={`${styles.sectionContainer} ${styles.chooseContainer}`} id="about">
      <div className={styles.chooseImage}>
        <Image src="/images/choose.jpg" alt="choose" width={475} height={580} />
      </div>
      <div className={styles.chooseContent}>
        <p className={styles.sectionSubheader}>Why Choose Us?</p>
        <h2 className={styles.sectionHeader}>
          Plan Your Trip <span>With Us</span>
        </h2>
        <ul className={styles.chooseList}>
          <li>
            <span>
              <Image src="/images/verified-line.png" alt="Verified" width={24} height={24} className={styles.icon}/>
            </span>
            <div>
              <h4>Best Price Guarantee</h4>
              <p>
                We ensure you get the most competitive rates for your travel plans, making your dream destinations affordable.
              </p>
            </div>
          </li>
          <li>
            <span>
              <Image src="/images/calendar-line.png" alt="Calendar" width={24} height={24} />
            </span>
            <div>
              <h4>Booking Options</h4>
              <p>
                Experience the ease of flexible booking options tailored to suit your schedule and preferences.
              </p>
            </div>
          </li>
          <li>
            <span>
              <Image src="/images/road-map-line.png" alt="Road Map" width={24} height={24} />
            </span>
            <div>
              <h4>Revising Track Map</h4>
              <p>
                Navigate your adventure with our personalized track maps designed for seamless and enjoyable travel experiences.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ChooseUs;
