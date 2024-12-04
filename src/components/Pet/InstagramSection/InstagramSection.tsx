import React from 'react';
import Image from 'next/image';
import styles from './InstagramSection.module.scss';

const InstagramSection: React.FC = () => {
  return (
    <section className={styles.instagramContainer}>
      <p>FOLLOW</p>
      <h2 className={styles.sectionHeader}>Instagram</h2>
      <div className={styles.instagramGrid}>
        <Image src="/images-pet/instagram-1.jpg" alt="instagram" width={184} height={184} />
        <Image src="/images-pet/instagram-2.jpg" alt="instagram" width={184} height={184} />
        <Image src="/images-pet/instagram-3.jpg" alt="instagram" width={184} height={184} />
        <Image src="/images-pet/instagram-4.jpg" alt="instagram" width={184} height={184} />
      </div>
    </section>
  );
};

export default InstagramSection;
