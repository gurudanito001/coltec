import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import ExecutionProcess from "./executionProcess";
import ProductCategories from "./productCategories";
import Footer from "./footer";

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Home | Captain Stitches',
  description: 'Tailored Excellence: Bespoke Corporate and African Attire for Distinctive Professionals',
};

export default function Home() {
  return (
    <main className="bg-white">
    <NavBar/>
    <HeroSection />
    <ExecutionProcess />
    <ProductCategories />
    <Footer />
    </main>
  );
}
