const Footer = () => {
  return (
    <div className='w-full h-72 bg-green-700 flex flex-col items-center justify-center p-4 mt-16'>
      <div className='w-full max-w-[1200px] flex text-white my-4 flex-wrap'>
        <div className='flex-1 mx-4'>
          <div className='w-full flex flex-col mb-6'>
            <p className='text-stone-200'>Green Basket</p>
            <p className='text-stone-200'>University of St. La Salle</p>
            <p className='text-stone-200'>
              Bacolod City, Negros Occidental, 6100
            </p>
          </div>
        </div>
        <div className='flex flex-1 gap-x-4 sm:gap-x-12 mx-4'>
          <div>
            <h1 className='font-bold text-xl mb-2'>Follow Us</h1>
            <p className='text-stone-200'>Facebook</p>
            <p className='text-stone-200'>Instagram</p>
            <p className='text-stone-200'>Twitter</p>
          </div>
          <div>
            <h1 className='font-bold text-xl mb-2'>Company</h1>
            <p className='text-stone-200'>About us</p>
          </div>
          <div>
            <h1 className='font-bold text-xl mb-2'>Support</h1>
            <p className='text-stone-200'>Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
