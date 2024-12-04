"use client";

import Navbar from '@/components/TravelToor/Navbar/Navbar';
import Header from '@/components/TravelToor/Header/Header';
import ChooseUs from '@/components/TravelToor/ChooseUs/ChooseUs';
import PopularDestinations from '@/components/TravelToor/PopularDestinations/PopularDestinations';
import Explore from '@/components/TravelToor/Explore/Explore';
import ClientTestimonials from '@/components/TravelToor/ClientTestimonials/ClientTestimonials';
import Subscribe from '@/components/TravelToor/Subscribe/Subscribe';
import Footer from '@/components/TravelToor/Footer/Footer';


export default function TravelToor() {
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
