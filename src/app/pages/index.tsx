import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import ChooseUs from '@/components/ChooseUs/ChooseUs';
import PopularDestinations from '@/components/PopularDestinations/PopularDestinations';
import Explore from '@/components/Explore/Explore';
import ClientTestimonials from '@/components/ClientTestimonials/ClientTestimonials';
import Subscribe from '@/components/Subscribe/Subscribe';
import Footer from '@/components/Footer/Footer';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <ChooseUs />
      <PopularDestinations/>
      <Explore/>
      <ClientTestimonials/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
