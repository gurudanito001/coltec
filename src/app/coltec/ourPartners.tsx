


"use client"
import Image from "next/image";
import {motion} from 'framer-motion';


const slides = [
  { logo: <div className="min-w-40">
    <Image
      src={"/images/images__1_-removebg-preview.png"}
      style={{ height: "22px", objectFit: "contain" }}
      alt="Cousera Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={"/images/AB-InBev-Emblem-removebg-preview.png"}
      style={{ height: "28px", objectFit: "contain" }}
      alt="Abinbev Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={"/images/mars-removebg-preview.png"}
      style={{ height: "28px", objectFit: "contain" }}
      alt="Mars Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={"/images/zone-removebg-preview.png"}
      style={{ height: "38px", objectFit: "contain" }}
      alt="Zone Logo"
      width={250}
      height={100}
    />
  </div> },
  { logo: <div className="min-w-40">
    <Image
      src={"/images/qore-removebg-preview.png"}
      style={{ height: "28px", objectFit: "contain" }}
      alt="Qore Logo"
      width={250}
      height={100}
    />
  </div> },

{ logo: <div className="min-w-40">
  <Image
    src={"/images/signature_bank_logo-removebg-preview.png"}
    style={{ height: "28px", objectFit: "contain" }}
    alt="Signature Bank Logo"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={"/images/riby-removebg-preview.png"}
    style={{ height: "68px", objectFit: "contain" }}
    alt="Riby Logo"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-40">
  <Image
    src={"/images/seamfix-removebg-preview.png"}
    style={{ height: "28px", objectFit: "contain" }}
    alt="Seamfix Logo"
    width={250}
    height={100}
  />
</div> },
{ logo: <div className="min-w-24">
  <Image
    src={"/images/fast_credit-removebg-preview.png"}
    style={{ height: "28px", objectFit: "contain" }}
    alt="Fast Credit Logo"
    width={250}
    height={100}
  />
</div> },
];

const Partners = () =>{

  const duplicatedSlides = [...slides, ...slides];

  


  return(
    <section className="bg-white py-5 xl:py-16 px-5 lg:px-20 overflow-x-hidden border shadow-inner xl:mt-20">
      <div className="text-black text-center mb-10">
  <h1 className="text-slate-700 text-3xl font-bold mt-10 lg:mt-0">Coltec&apos;s No.1 online print shop</h1>
  <p className="text-slate-500 text-lg">Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.
  </p>
</div>


      <div className="relative h-full overflow-hidden bg-white mx-auto">
            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-340%'],
                    transition: {
                        ease: 'linear',
                        duration: 50,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-44 md:w-52 mx-8 md:mx-12" >
                        <div className="flex items-center justify-center h-full">
                            <span>{slide.logo}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>

    </section>
  )
}

export default Partners