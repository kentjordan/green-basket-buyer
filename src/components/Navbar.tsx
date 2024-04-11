import React from "react";

const Navbar = () => {
  return (
    <div className='w-full flex-row items-center justify-around p-3 text-sm absolute z-50 text-white sm:flex hidden'>
      <h1>Green Basket</h1>
      {/* Menu */}
      <div className='flex flex-row gap-4 items-center'>
        <span>Contact</span>
        <span>About</span>
        <span className='bg-green-700 px-2 py-1 rounded text-white font-bold'>
          Login
        </span>
      </div>
    </div>
  );
};

export default Navbar;
