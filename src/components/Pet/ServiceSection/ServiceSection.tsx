import React from 'react';
import Image from 'next/image';
import styles from './ServiceSection.module.scss';

const ServiceSection: React.FC = () => {
  const services = [
    { img: '/images-pet/service-1.png', title: 'Emergency Care' },
    { img: '/images-pet/service-2.png', title: 'Vaccination Services' },
    { img: '/images-pet/service-3.png', title: 'Nutrition Counseling' },
    { img: '/images-pet/service-4.png', title: 'Behavioral Consultation' },
    { img: '/images-pet/service-5.png', title: 'Pet Boarding Services' },
  ];

  return (
    <section className={styles.sectionContainer} id="service">
      <p className={styles.subheader}>Services</p>
      <h2 className={styles.header}>What we can do for you</h2>
      <div className={styles.serviceFlex}>
        {services.map((service, index) => (
          <div className={styles.serviceCard} key={index}>
            <div>
              <Image src={service.img} alt={service.title} width={45} height={45} />
            </div>
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
