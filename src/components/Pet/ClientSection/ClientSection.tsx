import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './ClientSection.module.scss';

const ClientSection: React.FC = () => {
  const testimonials = [
    {
      img: '/images-pet/client-1.jpg',
      name: 'Sarah Johnson',
      title: 'Graphic Designer',
      feedback:
        "The care my dog received at Pet Doctor was exceptional. The vets were attentive and cared about my dog's well-being.",
    },
    {
      img: '/images-pet/client-2.jpg',
      name: 'Michael Adams',
      title: 'Software Engineer',
      feedback:
        'Pet Doctor saved my cat during an emergency! Their quick response and expertise made all the difference.',
    },
    {
      img: '/images-pet/client-3.jpg',
      name: 'Emily Martinez',
      title: 'Teacher',
      feedback:
        'I trust Pet Doctor with all my pets. Their team is professional, and they always go the extra mile for their patients.',
    },
    {
      img: '/images-pet/client-4.jpg',
      name: 'Jason Lee',
      title: 'Marketing Specialist',
      feedback:
        'The grooming services at Pet Doctor are fantastic! My pup always comes back looking fresh and happy.',
    },
    {
      img: '/images-pet/client-5.jpg',
      name: 'David Thompson',
      title: 'Accountant',
      feedback:
        "I've never seen a team so dedicated to animals. Pet Doctor is my go-to clinic for all pet-related issues.",
    },
  ];

  return (
    <section className={styles.client} id="testimonials">
      <div className={`${styles.sectionContainer} ${styles.clientContainer}`}>
        <p className={styles.subheader}>Testimonials</p>
        <h2 className={styles.header}>What people say about us</h2>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoHeight={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className={styles.clientCard}>
                <div className={styles.clientDetails}>
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className={styles.clientImage}
                  />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <h5>{testimonial.title}</h5>
                  </div>
                </div>
                <p>{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientSection;
