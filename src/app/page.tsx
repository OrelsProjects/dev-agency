"use client";

import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Plans from "@/components/landing/Plans";
import Portfolio from "@/components/landing/Portfolio";
import Process from "@/components/landing/Process";
import Testimonials from "@/components/landing/Testimonials";
import WhyMe from "@/components/landing/WhyMe";
import Navbar from "@/components/landing/Navbar";
import { ServiceComparison } from "@/components/landing/ServiceComparison";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyMe />
        <ServiceComparison/>
        <Portfolio />
        <Plans />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
