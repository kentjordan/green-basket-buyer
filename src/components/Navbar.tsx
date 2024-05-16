import Link from "next/link";

const Navbar = () => {
  return (
    <div className='w-full flex-row items-center justify-around p-3 text-sm absolute z-30 text-white sm:flex hidden'>
      <Link href='/' className='font-medium'>
        Green Basket
      </Link>
      {/* Menu */}
      <div className='flex flex-row gap-4 items-center'>
        {/* <span>Contact</span> */}
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
  );
};

export default Navbar;
