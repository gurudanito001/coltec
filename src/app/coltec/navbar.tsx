

const NavBar = ()=>{

  return(
    <nav className="text-black flex mt-11 justify-between md:justify-evenly ">
      <img className="w-52 h-52  mb-0 mt-10 relative bottom-20 " src="/images/CG_1_080925__1_-removebg-preview.png"/>
      <div className="lg:ml-60 space-x-20 hidden md:block text-gray-600 font-semibold mt-10">
      <a className="">Home</a>
      <a>About</a>
      <a>Sign in</a>
      <a>Create account</a>
      </div>

      <img className="md:hidden w-8 h-8 mt-12 mr-4 " src="/images/bars-solid (1).svg" />
    </nav>
  )
}

export default NavBar