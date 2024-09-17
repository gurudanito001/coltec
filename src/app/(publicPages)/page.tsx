import Image from "next/image";
import NavBar from "./navbar";
import HeroSection from "./heroSection";
import ExecutionProcess from "./executionProcess";
import ProductCategories from "./productCategories";
import Footer from "./footer";

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
