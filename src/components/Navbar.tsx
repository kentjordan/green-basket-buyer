import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      {isMobileNavOpen ? (
        <MobileNavBar
          isMobileNavOpen={isMobileNavOpen}
          setIsMobileNavOpen={setIsMobileNavOpen}
        />
      ) : (
        <>
          <div className='w-full flex justify-center'>
            <div className='w-full flex-row items-center max-w-[1200px] justify-between p-3 text-sm absolute z-30 text-white sm:flex hidden'>
              <Link href='/' className='font-medium'>
                Green Basket
              </Link>
              {/* Menu */}
              <div className='flex flex-row gap-4 items-center'>
                <Link href='/contact' className='text-white'>
                  Contact
                </Link>
                <Link href='/about-us' className='text-white'>
                  About
                </Link>
                <Link
                  href='/login'
                  className='bg-green-700 px-2 py-1 rounded text-white font-bold'>
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full flex-row items-center justify-between p-3 text-sm fixed bg-stone-700/80 backdrop-blur z-30 text-white sm:hidden flex'>
            <Link href='/'>Green Basket</Link>
            <MdMenu
              className='cursor-pointer'
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              size={28}
            />
          </div>
        </>
      )}
    </>
  );
};

const MobileNavBar = ({ isMobileNavOpen, setIsMobileNavOpen }: any) => {
  return (
    <div className='w-full h-full fixed bg-white z-50 p-6'>
      <div className='mb-8 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Menu</h1>
        <IoMdClose
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className='text-red-700 cursor-pointer'
          size={24}
        />
      </div>
      <div className='flex flex-col gap-y-4'>
        <Link
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          href='/'
          className='text-black'>
          Home
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          href='/contact'
          className='text-black'>
          Contact
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          href='/about-us'
          className='text-black'>
          About
        </Link>
        <Link
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          href='/login'
          className='rounded text-green-700 font-bold'>
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
