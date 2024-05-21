import Link from "next/link";

const Footer = () => {
  return (
    <div className='w-full h-72 bg-green-900 flex flex-col items-center justify-center p-4 mt-16'>
      <div className='w-full max-w-[1200px] flex text-white my-4 flex-wrap'>
        <div className='flex-1 mx-4'>
          <div className='w-full flex flex-col mb-6'>
            <p className='text-stone-200 text-sm'>Green Basket</p>
            <p className='text-stone-200 text-sm'>University of St. La Salle</p>
            <p className='text-stone-200 text-sm'>
              Bacolod City, Negros Occidental, 6100
            </p>
          </div>
        </div>
        <div className='flex flex-1 gap-x-4 sm:gap-x-12 mx-4'>
          <div>
            <h1 className='font-bold text-base md:text-lg mb-2'>Follow Us</h1>
            <div>
              <Link
                href='https://facebook.com'
                className='text-stone-200 text-sm block'>
                Facebook
              </Link>
              <Link
                href='https://twitter.com'
                className='text-stone-200 text-sm block'>
                Twitter
              </Link>
              <Link
                href='https://instagram.com'
                className='text-stone-200 text-sm block'>
                Instagram
              </Link>
            </div>
          </div>
          <div>
            <h1 className='font-bold mb-2 text-base md:text-lg'>Company</h1>
            <Link href='about-us' className='text-stone-200 text-sm'>
              About us
            </Link>
          </div>
          <div>
            <h1 className='font-bold mb-2 text-base md:text-lg'>Support</h1>
            <Link href='/contact' className='text-stone-200 text-sm'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
