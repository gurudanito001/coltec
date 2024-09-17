


const Testimonials = ()=>{

  return(
    <section className="bg-blue-50 p-16">
      <h1 className="text-2xl text-slate-700 font-bold">What Customers Say About Us</h1>

      <div className="grid lg:grid-cols-3  md:grid-cols-2 mt-7 gap-5 place-items-center">
      <div className="border border-white bg-white max-w-xl mx-auto p-6 shadow-md ">
        <span><img src="/images/twitter.svg"/></span><h1 className="font-semibold">Amina Ebele <a className="text-sky-500 font-bold" href="#">@DeliciousAmina</a></h1>
        <p className="w-full max-w-sm">I am now the unofficial <span className="text-sky-500">@Coltec</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!</p>
      </div>


      <div className="border border-white bg-white max-w-xl mx-auto p-6 shadow-md">
        <span><img src="/images/twitter.svg"/></span><h1 className="font-semibold">Oluwatosin <a className="text-sky-500 font-bold" href="#">@tosingirlfx</a></h1>
        <p className="w-full max-w-sm"> <span className="text-sky-500">@Coltec</span> delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come.</p>
      </div>


      <div className="border border-white bg-white max-w-xl mx-auto p-6 shadow-md">
        <span><img src="/images/twitter.svg"/></span><h1 className="font-semibold">Oluwatosin <a className="text-sky-500 font-bold" href="#">@olgablark</a></h1>
        <p className="w-full max-w-sm"> These guys <span className="text-sky-500">@Coltec</span> are really awesome and affordable. Excellent customer service and delivery too. Thank you. </p>
      </div>
      </div>
    </section>
  )
}

export default Testimonials