
const HeroSection = ()=>{

  return(
    <section className="mt-10 lg:ml-28 flex justify-between flex-col md:flex-row">
      <div className="md:px-7 lg:px-0">
      <h1 className="lg:text-6xl text-4xl font-bold text-gray-600 text-center lg:text-left">Quality Prints</h1>
      <p className="mt-4 lg:text-2xl text-zinc-400 font-semibold text-center lg:text-left">Shipped to your doorstep</p>

      <p className="mt-11 text-gray-600 font-bold text-center lg:text-left">What would you like to print today?</p>

      <label className="input input-bordered flex items-center">
  <input type="text" className="grow" placeholder="Search for Business cards, T-shirts, Mugs etc" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fill-rule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clip-rule="evenodd" />
  </svg>
</label>
</div>

<img className="w-96 h-96 relative md:bottom-20 px-10" src="/images/flyer-removebg-preview.png"/>
    </section>
  )
}

export default HeroSection