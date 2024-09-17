"use client"

import { Italiana } from "next/font/google";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "@ant-design/react-slick";


const italiana = Italiana({ subsets: ["latin"], weight: "400" });

const ProductCategories = () => {
  const imageList1 = [
    <Image
        key="cat-2"
        src={`/images/cat-2.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-3"
        src={`/images/cat-3.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-4"
        src={`/images/cat-4.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-5"
        src={`/images/cat-5.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-6"
        src={`/images/cat-6.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-7"
        src={`/images/cat-7.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-8"
        src={`/images/cat-8.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-9"
        src={`/images/cat-9.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-11"
        src={`/images/cat-11.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-12"
        src={`/images/cat-12.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-13"
        src={`/images/cat-13.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
  ]

  const imageList2 = [
    <Image
        key="cat-14"
        src={`/images/cat-14.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-15"
        src={`/images/cat-15.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-16"
        src={`/images/cat-16.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-17"
        src={`/images/cat-17.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-18"
        src={`/images/cat-18.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-19"
        src={`/images/cat-19.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-20"
        src={`/images/cat-20.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-21"
        src={`/images/cat-21.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-22"
        src={`/images/cat-22.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-23"
        src={`/images/cat-23.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-24"
        src={`/images/cat-24.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-25"
        src={`/images/cat-25.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
  ]

  const imageList3 = [
    <Image
        key="cat-26"
        src={`/images/cat-26.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-27"
        src={`/images/cat-27.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-28"
        src={`/images/cat-28.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-29"
        src={`/images/cat-29.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-30"
        src={`/images/cat-30.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-31"
        src={`/images/cat-31.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-32"
        src={`/images/cat-32.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-33"
        src={`/images/cat-33.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-34"
        src={`/images/cat-34.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-35"
        src={`/images/cat-35.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-36"
        src={`/images/cat-36.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
    <Image
        key="cat-37"
        src={`/images/cat-37.PNG`}
        style={{ objectFit: "cover" }}
        alt="Coursera Logo"
        width={300}
        height={250}
    />,
  ]

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="flex flex-col py-20 bg-neutral px-5 w-screen overflow-x-hidden" id="catalogue">
      <h3 className={`${italiana.className} text-center text-3xl font-semibold text-primary mb-12`}>Our Catalogue</h3>

      <Slider {...settings} rtl={false} className="mb-4" >
          {imageList1.map( item => item)}
      </Slider>

      <Slider {...settings} rtl={true} className="mb-4">
          {imageList2.map( item => item)}
      </Slider>

      <Slider {...settings} rtl={false} className="mb-4">
          {imageList3.map( item => item)}
      </Slider>
    </section>
  )
}

export default ProductCategories