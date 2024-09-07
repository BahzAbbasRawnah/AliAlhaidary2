
export default function Header() {
  return (
    <header className='md:h-[46px] bg-black flex flex-col sm:flex-row  justify-center items-center gap-2 text-white p-2 sm:p-4'>
      <div className='flex items-center'>

      <i className='pi pi-bolt text-xl sm:text-2xl'></i>
      <p className='text-center text-xs sm:text-base'>
        Unlock the Magic of Travel with Travila - Your Gateway to Extraordinary Experiences
      </p>
      </div>
      <button className='text-[#F09814] border-0 mx-2 sm:mx-8 flex items-center gap-2 text-xs sm:text-base'>
        <span>Get This Now</span>
        <i className='pi pi-arrow-right'></i>
      </button>
    </header>
  );
}
