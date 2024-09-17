


const Footer = ()=>{

  return(
    <section className="grid md:grid-cols-4 bg-slate-700 p-16">

      <div>
      <h1 className="text-white text-xl md:text-2xl font-semibold">Coltec</h1>
      <ul className="mt-3 text-white leading-normal text-sm md:text-md">
        <li>About Us</li>
        <li>Contact</li>
        <li>Track Order</li>
        <li>Coltec Promise</li>
        <li>Coltec Blog</li>
        <li>Career</li>
      </ul>
      </div>

      <div>
      <h1 className="text-white text-xl md:text-2xl mt-5 md:mt-0">Help and Information</h1>
      <ul className="mt-3 text-white leading-normal text-sm md:text-md">
        <li>Paper Quality</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Font Licenses</li>
        <li>Shipping and Delivery</li>
      </ul>
      </div>

      <div>
      <h1 className="text-white text-xl md:text-2xl mt-5 md:mt-0">Make Money</h1>
      <ul className="mt-3 text-white leading-normal text-sm md:text-md">
        <li>Refer a friend and earn 1,000</li>
        <li>Become a Reseller</li>
        <li>Sell your Designs</li>
        <li>Merge Store</li>
      </ul>
      </div>

      <div>
        <h1 className="text-white text-xl mt-5 md:mt-0">Follow Us</h1>
        <div className="flex space-x-10 mt-3">
        <img src="/images/fb.svg"/>
        <img src="/images/twitt.svg"/>
        <img src="/images/linkedin.svg"/>
        <img src="/images/ig.svg"/>
        </div>
        <div>
        <h1 className="text-white text-xl mt-9">Accepted Payments</h1>
        <img className="mt-3 w-48" src="/images/payment.png"/>
      </div>

      <div>
        <h1 className="text-white text-xl font-semibold mt-9">Delivery</h1>
        <img className="mt-3" src="/images/shipping.png"/>
      </div>
      </div>

      

      
      
    </section>
  )
}

export default Footer