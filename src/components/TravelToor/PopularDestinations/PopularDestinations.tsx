import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './PopularDestinations.module.scss';

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      image: '/images/popular-1.jpg',
      rating: '4.0(34) 😊',
      title: 'Lakshadweep',
      price: 'Rs. 28,000/-',
      duration: "4 Day's",
      group: '15+',
      location: 'India',
    },
    {
      id: 2,
      image: '/images/popular-2.jpg',
      rating: '4.5(55) 😘',
      title: 'Kaziranga',
      price: 'Rs. 15,000/-',
      duration: "2 Day's",
      group: '10+',
      location: 'India',
    },
    {
      id: 3,
      image: '/images/popular-3.jpg',
      rating: '4.2(45) 😊',
      title: 'Sun Temple',
      price: 'Rs. 18,000/-',
      duration: "3 Day's",
      group: '20+',
      location: 'India',
    },
    {
      id: 4,
      image: '/images/popular-4.jpg',
      rating: '4.8(25) 😘',
      title: 'Kashmir',
      price: 'Rs. 30,000/-',
      duration: "5 Day's",
      group: '10+',
      location: 'India',
    },
    {
      id: 5,
      image: '/images/popular-5.jpg',
      rating: '4.0(15) 😊',
      title: 'Kanyakumari',
      price: 'Rs. 15,000/-',
      duration: "3 Day's",
      group: '20+',
      location: 'India',
    },
  ];

  return (
    <section className={`${styles.sectionContainer} ${styles.popularContainer}`} id="package">
      <Image src="/images/bg.png" alt="Background" width={192} height={192} className={styles.popularBg} />
      <p className={styles.sectionSubheader}>Famous Destinations</p>
      <h2 className={styles.sectionHeader}>
        Our Popular <span>Destinations</span>
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id} className={styles.swiper}>
            <div className={styles.popularCard}>
              <Image 
                src={destination.image} 
                alt={destination.title} 
                width={343} 
                height={343} 
                layout="intrinsic" 
                className={styles.popularCardImage}
              />
              <div className={styles.popularContent}>
                <div className={styles.popularRating}>
                  <Image src="/images/star-line.png" alt="Star Rating" width={16} height={16} />
                  {destination.rating}
                </div>
                <h4>{destination.title}</h4>
                <p>
                  <span>{destination.price}</span> Per Person
                </p>
                <div className={styles.popularCardFooter}>
                  <div>
                    <Image src="/images/time-line.png" alt="Duration" width={16} height={16} />
                    {destination.duration}
                  </div>
                  <div>
                    <Image src="/images/group-3-line.png" alt="Group Size" width={16} height={16} />
                    {destination.group}
                  </div>
                  <div>
                    <Image src="/images/map-pin-2-line.png" alt="Location" width={16} height={16} />
                    {destination.location}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularDestinations;
