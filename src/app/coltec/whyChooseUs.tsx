
const WhyChooseUs = ()=>{

  return(
    <section className="bg-white">
      <h1 className="text-3xl text-slate-700 font-bold mt-20 ml-9 text-center lg:text-left">You Can Count Us For:</h1>

      <div className="flex  justify-evenly mt-10 flex-col lg:flex-row mb-20">
        <img className="w-20 h-20 mx-auto" src="/images/first-logo.svg"/>
        <div>
        <h1 className="text-lg text-slate-700 text-center lg:text-left font-semibold">Fast Turnaround Within Days</h1>
        <p className="text-slate-400 w-full max-w-xs text-center lg:text-left px-3 lg:px-0 mx-auto">Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct.</p>
        </div>

        <img className="w-20 h-20 mx-auto mt-7 lg:mt-0" src="/images/second-logo.svg"/>
        <div>
        <h1 className="text-lg text-slate-700 text-center lg:text-left font-semibold">100% Top Quality</h1>
        <p className="text-slate-400 w-full max-w-xs text-center lg:text-left mx-auto">Only the finest materials, machines and people will be involved in fulfilling your order.</p>
        </div>

        <img className="w-20 h-20 mx-auto mt-7 lg:mt-0" src="/images/third-logo.svg"/>
        <div>
        <h1 className="text-lg text-slate-700 text-center lg:text-left font-semibold">Affordable Services</h1>
        <p className="text-slate-400 w-full max-w-xs text-center lg:text-left px-3 lg:px-0 mx-auto">All products are adequately priced to ensure you get value for your money at all times.</p>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs