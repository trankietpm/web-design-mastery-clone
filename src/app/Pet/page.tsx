"use client";

import NavBar from "@/components/Pet/Navbar/Navbar";
import Header from "@/components/Pet/Header/Header";
import IntroSection from "@/components/Pet/IntroSection/IntroSection";
import AboutSection from "@/components/Pet/AboutSection/AboutSection";
import ProductSection from "@/components/Pet/ProductSection/ProductSection";
import ServiceSection from "@/components/Pet/ServiceSection/ServiceSection";
import ClientSection from "@/components/Pet/ClientSection/ClientSection";
import InstagramSection from "@/components/Pet/InstagramSection/InstagramSection";
import Footer from "@/components/Pet/Footer/Footer";


export default function TravelToor() {
  return (
    <>
      <NavBar/>
      <Header/>
      <IntroSection/>
      <AboutSection/>
      <ProductSection/>
      <ServiceSection/>
      <ClientSection/>
      <InstagramSection/>
      <Footer/>
    </>
  );
}
