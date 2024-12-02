import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import ChooseUs from '@/components/ChooseUs/ChooseUs';
import Testimonials from '@/components/Testimonials/Testimonials';
import Subscribe from '@/components/Subscribe/Subscribe';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <ChooseUs />
      <Testimonials />
      <Subscribe />
    </>
  );
}
