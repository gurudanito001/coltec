import Image from "next/image";
import { ArrowLongRightIcon, ArrowLongDownIcon } from "@heroicons/react/24/outline";
import { Italiana } from "next/font/google";

const italiana = Italiana({ subsets: ["latin"], weight: "400" });



const ExecutionProcess = () => {

  return (
    <section className="bg-overlay-cream px-5 xl:px-28 py-20" id="our-process">
      <h3 className={`${italiana.className} text-center text-3xl font-semibold mb-3 text-primary`}>Our Process</h3>
      <p className="text-sm md:text-lg text-center text-primary max-w-550 mx-auto">
        We have a 6-step process to ensure that we always deliver the best quality and achieve customer satisfaction.
      </p>


      <div className="flex flex-col mt-14">
        <div className="flex flex-col md:flex-row md:gap-3 justify-center w-full">

          <div className="xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:ml-auto rounded md:min-h-80">
            <div className="bg-[url('/images/talk.jpg')] bg-cover bg-center bg-no-repeat w-full h-36 mx-auto"></div>
            <h6 className="text-primary mt-4 text-center font-semibold">Talk to a representative</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light"> Start by exploring our courses we offer, including QA Engineering and Scrum Mastery. </p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-5 lg:w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-5 lg:w-8 inline md:hidden" />
          </div>



          <div className="xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 rounded md:min-h-80">
            <div className="bg-[url('/images/measurement.jpg')] bg-cover bg-center bg-no-repeat w-full h-36 mx-auto"></div>
            <h6 className="text-primary mt-4 text-center font-semibold">Send Measurement</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">Once you’ve identified the course that fits your goals, review the course details carefully.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-5 lg:w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-5 lg:w-8 inline md:hidden" />
          </div>



          <div className="xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:mr-auto rounded md:min-h-80">
            <div className="bg-[url('/images/payment.jpg')] bg-cover bg-center bg-no-repeat w-full h-36 mx-auto"></div>
            <h6 className="text-primary mt-4 text-center font-semibold">First payment instalment</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light px-1">Click on the “Register for a Cohort” button on your chosen course page and fill the form</p>
          </div>
        </div>

        <div className="w-auto flex items-center justify-center md:hidden">
          <ArrowLongRightIcon className="text-primary w-5 lg:w-8 hidden md:inline" />
          <ArrowLongDownIcon className="text-primary w-5 lg:w-8 inline md:hidden" />
        </div>

        <div className="flex flex-col md:flex-row md:gap-3 justify-center w-full">

          <div className="xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:ml-auto rounded md:min-h-80">
            <div className="bg-[url('/images/production.jpg')] bg-cover bg-center bg-no-repeat w-full h-36 mx-auto"></div>
            <h6 className="text-primary mt-4 text-center font-semibold">Begin Production</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light"> Promptly complete your payment to secure your spot in the upcoming cohort, as spaces are often limited.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-5 lg:w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-5 lg:w-8 inline md:hidden" />
          </div>



          <div className="xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 rounded md:min-h-80">
            <div className="bg-[url('/images/fitting.jpg')] bg-cover bg-center bg-no-repeat w-full h-36 mx-auto"></div>
            <h6 className="text-primary mt-4 text-center font-semibold">Fitting & Amendments</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light">You’ll receive an official welcome email from Quales Academy with course date and pre-course details.</p>
          </div>

          <div className="w-auto flex items-center justify-center">
            <ArrowLongRightIcon className="text-primary w-5 lg:w-8 hidden md:inline" />
            <ArrowLongDownIcon className="text-primary w-5 lg:w-8 inline md:hidden" />
          </div>



          <div className="xl:w-full max-w-72 h-full flex flex-col items-center bg-base p-4 xl:p-12 my-3 shadow mx-auto md:mx-0 md:mr-auto rounded md:min-h-80">
            <div className="bg-[url('/images/delivery.jpg')] bg-cover bg-center bg-no-repeat w-full h-36 mx-auto"></div>
            <h6 className="text-primary mt-4 text-center font-semibold">Final Payment & Delivery</h6>
            <p className="text-primary mt-3 text-center text-xs md:text-sm font-light px-2"> On the course start date, log in to Zoom and join the class with the provided credentials.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExecutionProcess

