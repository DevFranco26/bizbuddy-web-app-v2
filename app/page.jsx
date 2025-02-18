// File: biz-web-app/app/page.jsx

"use client";
import LandingHero from "@/components/Dashboard/LandingHero";
import FeaturesIcon from "@/components/Dashboard/FeaturesIcon";
import KeyFeatures from "@/components/Dashboard/KeyFeatures";
import Testimonials from "@/components/Dashboard/Testimonials";
import DataDisplay from "@/components/Dashboard/DataDisplay";
import TrustedPartners from "@/components/Dashboard/TrustedPartners";
import Contact from "@/components/Dashboard/Contact";
import Accordion from "@/components/Dashboard/Accordion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full md:pt-16 lg:pt-18 pt-10">
      <LandingHero />
      <FeaturesIcon />
      <KeyFeatures />
      <Testimonials />
      <DataDisplay />
      <TrustedPartners />
      <Contact />
      <Accordion />
      <Footer />
    </div>
  );
}
