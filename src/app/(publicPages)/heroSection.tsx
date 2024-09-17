"use client"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";
import Image from "next/image";
import Link from "next/link";

import localFont from 'next/font/local';

const Italiana = localFont({
  src: '../assets/Italiana/Italiana-Regular.ttf'
})





const HeroSection = () => {

  const images = [
    `bg-[url('/images/IMG_0668.PNG')]`,
    `bg-[url('/images/IMG_0728.PNG')]`,
    `bg-[url('/images/IMG_0733.PNG')]`,
    `bg-[url('/images/IMG_0759.PNG')]`,
    `bg-[url('/images/IMG_0728.PNG')]`
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const listImages = ()=>{
    return images.map( (item: string, index) =>{
      return (
        <div key={item} className="w-full border flex">
          <div className={`carousel-item ${images[index]} h-800 bg-cover bg-center bg-no-repeat h-420 mx-auto`}>
          </div>
        </div>
      )
    })
  }

  return (
      
    <section className="w-full h-800 flex flex-col-reverse lg:flex-row">
      <article className={`h-full w-full bg-hero-bg flex flex-col lg:justify-center p-5 md:pl-10 lg:pl-14 `}>
        <Image src="/images/hero-bg-2.png" className="lg:hidden max-h-550 mx-auto" alt="man in suit" objectFit="contain" width={400} height={500} />
        <h3 className={`${Italiana.className} text-3xl lg:text-6xl text-primary w-full mb-5  text-center lg:text-left mt-5`}>Tailored Excellence: Bespoke Corporate and African Attire for Distinctive Professionals </h3>
        <p className="hidden lg:block text-primary text-lg xl:text-xl font-light mb-7 max-w-3xl text-justify lg:text-left">
        Elevate your professional and personal style with Captain Stitches, where bespoke craftsmanship meets timeless elegance. Specializing in custom corporate wear and African attires, we offer a tailored experience that reflects your unique identity and success. 
        </p>
        <div className=" flex">
          <Link href="" className="btn bg-primary border-primary text-neutral w-full max-w-36 mx-auto sm:ml-auto sm:mr-3 lg:ml-0 mt-5">Let&apos;s talk</Link>
          <Link href="/#catalogue" className="btn bg-hero-bg border-primary text-primary w-full max-w-36 mx-auto sm:mr-auto sm:ml-3 lg:mr-0 mt-5">View Catalogue</Link>
        </div>
      </article>
      <figure className={`hidden lg:block h-full w-full lg:max-w-450 xl:max-w-550 bg-blend-darken bg-[url('/images/hero-bg-2.png')] bg-no-repeat bg-cover bg-center`}>
      </figure>
    </section>
  )
}

export default HeroSection;