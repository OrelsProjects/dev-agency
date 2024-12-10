"use client";

import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Plans from "@/components/landing/Plans";
import Portfolio from "@/components/landing/Portfolio";
import Process from "@/components/landing/Process";
import Testimonials from "@/components/landing/Testimonials";
import WhyMe from "@/components/landing/WhyMe";
import Navbar from "@/components/landing/Navbar";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhyMe />
        <Portfolio />
        <Plans />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
