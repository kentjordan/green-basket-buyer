import React from "react";

const Navbar = () => {
  return (
    <div className='w-full flex flex-row items-center justify-between p-3 text-sm'>
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
