import React from 'react';
import Image from 'next/image';
import styles from './IntroSection.module.scss';

const IntroSection: React.FC = () => {
  return (
    <section className={styles.sectionContainer}>
      <p className={styles.subheader}>Intro</p>
      <h2 className={styles.header}>Get to know us more</h2>
      <div className={styles.introGrid}>
        <div className={styles.introCard}>
          <div className={styles.introImage}>
            <Image 
              src="/images-pet/intro-1.png" 
              alt="Pet Experts" 
              width={300} 
              height={200} 
            />
          </div>
          <h4>Pet Experts</h4>
          <p>
            Meet our team of skilled veterinarians, dedicated to your pet&apos;s
            well-being.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className={styles.introCard}>
          <div className={styles.introImage}>
            <Image 
              src="/images-pet/intro-2.png" 
              alt="Vet Services" 
              width={300} 
              height={200} 
            />
          </div>
          <h4>Vet Services</h4>
          <p>
            Offering a wide range of veterinary services to keep your pets
            healthy and happy.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className={styles.introCard}>
          <div className={styles.introImage}>
            <Image 
              src="/images-pet/intro-3.png" 
              alt="Contact Us" 
              width={300} 
              height={200} 
            />
          </div>
          <h4>Contact Us</h4>
          <p>
            Reach out to us for any inquiries or schedule an appointment for
            your pet&apos;s care.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
