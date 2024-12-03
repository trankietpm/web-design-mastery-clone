import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ClientTestimonials.module.scss';

const ClientTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const clientCardsRef = useRef<(HTMLDivElement | null)[]>([]); 

  useEffect(() => {
    
    if (clientCardsRef.current.length > 0) {
      clientCardsRef.current[activeIndex]?.classList.add(styles.active);
    }
  }, [activeIndex]);

  const nextCard = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % clientCardsRef.current.length);
  };

  const prevCard = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + clientCardsRef.current.length) % clientCardsRef.current.length);
  };

  return (
    <section className={`${styles.sectionContainer} ${styles.clientContainer}`}>
      <div className={styles.clientBg}>
        <Image 
          src="/images/bg.png" 
          alt="bg" 
          width={192} 
          height={192} 
          layout="intrinsic"
        />
      </div>
      <p className={styles.sectionSubheader}>What Our Client Say&#39;s?</p>
      <h2 className={styles.sectionHeader}>Client <span>Testimonials</span></h2>

      <div 
        className={`${styles.clientCard} ${activeIndex === 0 ? styles.active : ''}`} 
        ref={(el) => { clientCardsRef.current[0] = el; }} 
        style={{ display: activeIndex === 0 ? 'block' : 'none' }} 
      >
        <Image 
          src="/images/client-1.jpg" 
          alt="client" 
          width={400} 
          height={500} 
          className={styles.clientImage}
        />
        <div className={styles.clientContent}>
          <h4>Emma Johnson</h4>
          <h5>Travel Blogger</h5>
          <p>
            This travel platform turned my bucket list dreams into reality! The
            booking process was seamless, and their team provided excellent
            guidance on must-visit spots. Every step felt effortless, and I
            can&#39;t wait to plan my next adventure with them. Highly recommended!
          </p>
        </div>
      </div>

      <div 
        className={`${styles.clientCard} ${activeIndex === 1 ? styles.active : ''}`} 
        ref={(el) => { clientCardsRef.current[1] = el; }} 
        style={{ display: activeIndex === 1 ? 'block' : 'none' }} 
      >
        <Image 
          src="/images/client-2.jpg" 
          alt="client" 
          width={400} 
          height={500} 
          className={styles.clientImage}
        />
        <div className={styles.clientContent}>
          <h4>Sophia Lee</h4>
          <h5>Software Engineer</h5>
          <p>
            Traveling with this service was a delight! The flexible booking
            options gave me the freedom to plan at my own pace, and the detailed
            itineraries ensured I didn&#39;t miss anything important. I felt like
            they genuinely cared about creating the perfect travel experience
            for me. Absolutely wonderful!
          </p>
        </div>
      </div>

      <div 
        className={`${styles.clientCard} ${activeIndex === 2 ? styles.active : ''}`} 
        ref={(el) => { clientCardsRef.current[2] = el; }} 
        style={{ display: activeIndex === 2 ? 'block' : 'none' }}  
      >
        <Image 
          src="/images/client-3.jpg" 
          alt="client" 
          width={400} 
          height={500} 
          className={styles.clientImage}
        />
        <div className={styles.clientContent}>
          <h4>Michael Roberts</h4>
          <h5>Photographer</h5>
          <p>
            As a photographer, finding picturesque locations is key, and this
            platform exceeded my expectations. They not only made booking easy
            but also helped me discover some incredible hidden gems. Their
            attention to detail made my journey unforgettable and hassle-free!
          </p>
        </div>
      </div>

      <div className={styles.clientBtns}>
        <button className={styles.btn} onClick={prevCard}>
          <Image 
            src="/images/arrow-left-line.png" 
            alt="Previous" 
            width={24} 
            height={24} 
          />
        </button>
        <button className={styles.btn} onClick={nextCard}>
          <Image 
            src="/images/arrow-right-line.png" 
            alt="Next" 
            width={24} 
            height={24} 
          />
        </button>
      </div>
    </section>
  );
};

export default ClientTestimonials;
