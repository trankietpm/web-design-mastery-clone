import React from 'react';
import Image from 'next/image';
import styles from './AboutSection.module.scss';
import 'remixicon/fonts/remixicon.css';

const AboutSection: React.FC = () => {
  const aboutData = [
    {
      img: '/images-pet/about-1.jpg',
      icon: '/images-pet/about-1-icon.png',
      title: 'Let us help you with your pet health',
      description:
        'Our expert veterinarians are here to provide comprehensive care and guidance to ensure your pet stays in perfect health.',
    },
    {
      img: '/images-pet/about-2.jpg',
      icon: '/images-pet/about-2-icon.png',
      title: 'Caring personal will take care of your pet',
      description:
        'Your pet will be in good hands with our compassionate and well-trained staff, who treat every pet like family.',
    },
    {
      img: '/images-pet/about-3.jpg',
      icon: '/images-pet/about-3-icon.png',
      title: 'Let us groom your precious and loved pet',
      description:
        'From bathing to styling, we offer professional grooming services to keep your pet looking and feeling their best.',
    },
  ];

  return (
    <section className={styles.sectionContainer} id="about">
      <p className={styles.subheader}>About Us</p>
      <h2 className={styles.header}>What we can do for you</h2>
      {aboutData.map((item, index) => (
        <div key={index} className={styles.aboutRow}>
          <div className={styles.aboutImage}>
            <Image src={item.img} alt="about" width={400} height={267} />
          </div>
          <div className={styles.aboutContent}>
            <span>
              <Image src={item.icon} alt="about-icon" width={40} height={35} />
            </span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AboutSection;
