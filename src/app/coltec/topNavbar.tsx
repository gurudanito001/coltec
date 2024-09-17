const TopNavBar = ()=>{

  return(
    <nav className="text-black flex lg:justify-end gap-7 py-3 px-5 md:px-14 justify-evenly bg-stone-100">
      <p className="text-zinc-500 font-semibold text-sm">Need help? Call:<br/>
      <span className="text-blue-500 font-semibold text-sm">+2347069000083 or +2349035000505</span>
      </p>
      <img className="w-7 h-7 mt-3" src="/images/whatsapp-brands-solid.svg"/>
      
    </nav>
  )
}

export default TopNavBar